import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/active');
  await page.getByTestId('text-input').fill('test 1');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('test 2');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('test 3');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('test 4');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByRole('listitem').filter({ hasText: 'test 2' }).getByTestId('todo-item-toggle')).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'test 3' }).getByTestId('todo-item-toggle').check();

  await page.getByRole('listitem').filter({ hasText: 'test 1' }).getByTestId('todo-item-toggle').check();
  await expect(page.locator('.todo-list li')).toHaveCount(2)
  
  await page.pause()
});