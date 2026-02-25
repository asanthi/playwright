exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username or email' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Sign In' })
    }

    async goToLoginPage(){
        await this.page.goto('http://localhost:8080/admin');
    }

    async login(username,password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
       // await this.page.pause()
    }

   

}