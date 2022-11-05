import React from 'react'

export default function Login() {
  return (
    <div className='w-72 ml-auto mr-auto  mt-24'>
      <main class="form-signin w-100 m-auto">
        <form className=''>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div>
            <br />
          </div>
          <button class="w-100 btn btn-lg btn-primary text-black" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  )
}
