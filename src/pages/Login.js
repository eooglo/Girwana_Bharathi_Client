import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <main class="gir_signup gir_login gir_page">
        <section class="gir_signup_block">
            <div class="gir_container_sm">
                <div class="gir_signup_form">
                    <h2>Login</h2>
                    <form action="">
                        <div class="gir_input">
                            <input type="email" name="" id="" placeholder="Email" />
                        </div>
                        <div class="gir_input">
                            <input type="password" name="" id="" placeholder="New Password" />
                        </div>
                        <div class="gir_fx">
                            <div class="gir_terms">By clicking Sign Up, you agree to our <Link href="#">Terms.</Link></div>
                            <button class="gir_form_btn" type="submit">Login</button>
                        </div>
                    </form>
                    <div class="gir_other_login">
                        <div class="gir_or">
                            <span>or</span>
                        </div>
                        <div class="gir_fb_go">
                            <div class="gir_fb gir_so"><span></span>Facebook</div>
                            <div class="gir_go gir_so"><span></span>google</div>
                        </div>
                        <div class="gir_log">Already have an account? <Link to="/sign-up">Sign Up</Link></div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
    )
}
