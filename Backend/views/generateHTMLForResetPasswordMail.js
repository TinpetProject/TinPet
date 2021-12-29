module.exports = (resetPwLink) => {
  return `
      <html lang="en">
      <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    
        <!-- Bootstrap CSS v5.0.2 -->
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <!-- Font -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="index.css" />
        <style>
          :root {
            --main-bg-color: #efefef;
            --container-bg-color: #fff;
            --main-text-color: #373737;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: "Source Sans Pro", sans-serif;
            font-size: 16px;
          }
          .container-fluid {
            color: var(--main-text-color);
            background-color: var(--main-bg-color);
            padding-top: 30px;
            height: 100vh;
            overflow: auto;
            width: 100vw;
          }
          .container {
            background-color: var(--container-bg-color);
            margin-top: 1rem;
            width: 500px;
            border-radius: 14px;
            height: fit-content;
            padding: 50px;
            text-align: center;
          }
          .container__btn {
            width: fit-content;
            padding: 10px 20px;
            margin-top: 2.6rem;
            margin-bottom: 1.1rem;
            background: rgb(255, 35, 165);
            background: linear-gradient(0deg, rgba(255, 35, 165, 1) 0%, rgba(255, 120, 84, 1) 100%);
            border: none;
            border-radius: 8px;
            text-transform: uppercase;
            color: var(--main-bg-color);
            font-size: 1rem;
            font-weight: 500;
            text-decoration: none;
          }
          .logo {
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .logo__text {
            display: inline;
            font-weight: 600;
            font-size: 2.5rem;
            margin-top: 3px;
          }
          .logo__icon {
            font-size: 4rem;
          }
          .container h4 {
            font-weight: 500;
          }
          .container h5 {
            font-weight: 300;
            font-size: 1rem;
          }
          .footer {
            font-size: 0.75rem;
            margin-top: 100px;
            margin-bottom: 30px;
            text-align: center;
          }
          .footer span {
            color: #c4c4c4;
          }
          .footer svg {
            color: #c4c4c4 !important;
          }
        </style>
      </head>
      <body>
        <div class="container-fluid">
          <div class="logo">
            <span class="logo__icon iconify" data-icon="icons8:cat-footprint" style="color: #373737"></span>
            <h3 class="logo__text">Tinpet</h3>
          </div>
          <div class="container">
            <div class="container__head">
              <img src="cid:forget-password-illus" alt="" height="150" />
            </div>
            <hr />
    
            <h4>Forgot your password?</h4>
            <br /><br />
            <h5>That's okay, it happens!</h5>
            <h5>Click on the button below to reset your password</h5>
            <a type="button" class="container__btn" href="${resetPwLink}">reset your password</a>
          </div>
          <div class="footer">
            <span class="iconify" data-icon="ant-design:copyright-circle-outlined" style="color: #c4c4c4"></span>
            <span>2021 GROUP 5, INC</span>
          </div>
        </div>
    
        <!-- Bootstrap JavaScript Libraries -->
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
    
        <!-- Iconify Lib -->
        <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
      </body>
    </html>`;
};
