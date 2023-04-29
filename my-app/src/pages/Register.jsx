import React from 'react'


function Register() {
  return (
    <div className='signup'> 
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta
    name="author"
    content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
  />
  <meta name="generator" content="Hugo 0.104.2" />
  <title>Signup Template · Bootstrap v5.2</title>
  <link
    rel="canonical"
    href="https://getbootstrap.com/docs/5.2/examples/sign-in/"
  />
  <link
    href="/docs/5.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossOrigin="anonymous"
  />
  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    href="/docs/5.2/assets/img/favicons/apple-touch-icon.png"
    sizes="180x180"
  />
  <link
    rel="icon"
    href="/docs/5.2/assets/img/favicons/favicon-32x32.png"
    sizes="32x32"
    type="image/png"
  />
  <link
    rel="icon"
    href="/docs/5.2/assets/img/favicons/favicon-16x16.png"
    sizes="16x16"
    type="image/png"
  />
  <link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json" />
  <link
    rel="mask-icon"
    href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg"
    color="#712cf9"
  />
  <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico" />
  <meta name="theme-color" content="#712cf9" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    "
    }}
  />
  {/* Custom styles for this template */}
  <link href="css/login.css" rel="stylesheet" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <main className="form-signin w-100 m-auto">
    <form>
      <img className="mb-4" src="img/user.png" alt="" width={72} height={57} />
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
      <div className="form-floating">
        <input
          type="username"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input
          type="confirm password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Confirm password</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" defaultValue="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
    </form>
  </main>
</>

    </div>
  )
}

export default Register