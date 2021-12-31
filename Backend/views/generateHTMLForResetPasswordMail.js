module.exports = (resetPwLink) => {
    return `<html lang="en">
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
        <!-- <link rel="stylesheet" href="./assets/css/my-styles.css" /> -->
        <style>
            @font-face {
                font-family: "PT Sans";
                font-style: normal;
                font-weight: normal;
                src: local("PT Sans"), local("PTSans-Regular"),
                    url(data:application/font-woff2;charset=utf-8;base64,d09GRgABAAAAAHowABMAAAAA+OAA) format("woff2");
            }
            @font-face {
                font-family: "PT Serif";
                font-style: normal;
                font-weight: normal;
                src: local("PT Serif"), local("PTSerif-Regular"),
                    url(data:application/font-woff2;charset=utf-8;base64,d09GRgABAAAAAIQYABMAAAAA/MAA) format("woff2");
            }
        </style>
    </head>
    <body
        style="
            font-family: Arial, Helvetica, sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        "
    >


            <table
                class="container-fluid"
                style="color: #373737; background-color: #efefef; padding-top: 30px; height: 100%; overflow: auto; width: 100%; text-align: center"
                width="100%" border="0" cellspacing="0" cellpadding="0"
                align="center"
            >
            <tr style="display: inline">
                <td 
                    align="center" 
                    style="width: 100%"
                >
                    <div style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center
                        "
                    >
                        <img src="cid:logo" alt="" style="margin-left: 0px" width="53" height="50"/>
                        <span
                            class="logo__text"
                            style="
                                display: inline;
                                font-weight: 600;
                                font-size: 35px;
                                margin-top: 3px;
                                padding-left: 0;
                                margin-left: 10px;
                            "
                        >
                            Tinpet
                        </span>
                    </div>
                </td>
            </tr>
            
            <tr>
                <td align="center">
                <div
                    class="container"
                    style="
                        background-color: #fff;
                        margin-top: 30px;
                        width: 400px;
                        border-radius: 14px;
                        height: fit-content;
                        padding: 50px;
                        text-align: center;
                    "
                >
                    <div class="container__head">
                        <img src="cid:forget-password-illus" alt="" height="150" />
                    </div>
                    <hr />

                    <h4 style="font-weight: 700; font-size: 20px">Forgot your password?</h4>
                    <br />
                    <h5 style="font-weight: 300; font-size: 15px; margin: 0">That's okay, it happens!</h5>
                    <h5 style="font-weight: 300; font-size: 15px; margin: 0">Click on the button below to reset your password</h5>
                    <button
                        type="button"
                        class="container__btn"
                        style="
                            width: fit-content;
                            padding: 10px 20px;
                            margin-top: 36px;
                            margin-bottom: 16px;
                            background: rgb(255, 35, 165);
                            background: linear-gradient(0deg, rgba(255, 35, 165, 1) 0%, rgba(255, 120, 84, 1) 100%);
                            border: none;
                            border-radius: 8px;
                            text-transform: uppercase;
                            color: #efefef;
                            font-size: 14px;
                            font-weight: 500;
                        "
                    >
                        <a
                            href="${resetPwLink}"
                            style="
                                text-decoration: none;
                                color: #efefef;
                                font-weight: 700;
                                display: inline-block;
                                line-height: 35px;
                                font-size: 17px;
                                transform: translateY(1px);
                            "
                            >reset your password</a
                        >
                    </button>
                </div>
                </td>
            </tr>

                <tr style="display: inline">
                    <td 
                        align="center" 
                        style="width: 100%"
                    >
                        <div class="footer" style="font-size: 11px; margin-top: 60px; margin-bottom: 30px; text-align: center; color: #c4c4c4; display: flex">
                            <img src="cid:copyright" alt="" height="20" />
                            <span
                                class="logo__text"
                                style="
                                    display: inline;
                                    font-weight: 300;
                                    font-size: 12px;
                                    margin-top: 3px;
                                    padding-left: 0;
                                    margin-left: 10px;
                                "
                            >
                                2021 GROUP 5, INC
                            </span>
                        </div>
                    </td>
                </tr>
            </table>


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
