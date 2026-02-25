import { test, expect } from '@playwright/test'

test('API POST Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': process.env.REQRES_API_KEY,
            'User-Agent': 'reqres-qa-tests/1.0',
            'Accept': 'application/json'
        },
        data: {
            "name": "Asanthi",
            "job": "QA"
        }
    })

    expect(response.status()).toBe(201)

    const text = await response.text()
    expect(text).toContain('Asanthi')

    console.log(await response.json())

})

test('API GET Request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': process.env.REQRES_API_KEY,
            'User-Agent': 'reqres-qa-tests/1.0',
            'Accept': 'application/json'
        }
    })
    expect(response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('Janet')

    console.log(await response.json())

})

test('API PUT Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': process.env.REQRES_API_KEY,
            'User-Agent': 'reqres-qa-tests/1.0',
            'Accept': 'application/json'
        },
        data: {
            "name": "AsanthiChanged",
            "job": "QA"
        }
    })

    expect(response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('AsanthiChanged')

    console.log(await response.json())

})

test('API DELETE Request', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': process.env.REQRES_API_KEY,
            'User-Agent': 'reqres-qa-tests/1.0',
            'Accept': 'application/json'
        }
    })
    expect(response.status()).toBe(204)
})
