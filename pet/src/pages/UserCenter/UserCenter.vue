<template>
    <div>
      <div class="user_wrap">
        <div class="user_header">
          <div class="login_bg">
            <div class="header_top">
              <a href="#" class="togo"></a>
              <div class="right_top">
                <a href="#">
                  注册
                </a>
              </div>
            </div>
            <div class="header_middle">
              <img src="./logo.png">
            </div>
            <div class="header_bottom">
              <ul>
                <li>
                  <a href="#">普通登录</a>
                </li>
                <li>
                  <a href="#">手机动态密码登录</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div class="formBox">
          <div class="user_content">
            <ul class="form">
              <li>
                <span class="nameIco"></span>
                <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
              </li>
              <li>
                <span class="passwordIco"></span>
                <input type="password" placeholder="输入密码" class="text" name="password" id="password">
              </li>
            </ul>
          </div>
          <div class="fpw">
            <a href="#">忘记密码？</a>
          </div>
          <div class="loginbtn">
            <a href="#">登录</a>
          </div>
          <div class="empty"></div>
          <div class="otherLogins">
            <div class="partners">
              <b>合作网站登录</b>
            </div>
            <ul class="partnersList">
              <li>
                <a href="#">
                  <img src="./login_ico4.png">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./login_ico2.png">
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background: #f5f5f5;
    color: #333;
    line-height: 20px;
    min-width: 320px;
    box-sizing: border-box;
    font: 62.5% 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
    .user_wrap
      background: #fff;
      .user_header
        .login_bg
          background-image url("./bg.png")
          background-size 100% 100%
          .header_top
            height: 50px;
            line-height: 50px;
            position: relative;
            padding: 0 1em;
            .togo
              background-image url("./personal-bico3.png")
              background-repeat no-repeat
              background-size: 12px 17px;
              display: block;
              width: 22px;
              height: 20px;
              position: absolute;
              margin-top: 16px;
            .login_bg
              background-image url("./bg.png")
              background-size 100% 100%
            .right_top
              position: absolute;
              right: 10px;
              top: 0;
              font-size: 1.6em;
              a
                color: #fff;
          .header_middle
            padding: 1em 0 2em 0;
            img
              display: block;
              margin: auto;
              width: 20%;
              vertical-align: middle;
          .header_bottom
            background-color: rgba(255,255,255,0.3);
            ul
              overflow: hidden;
              li
                float: left;
                width: 50%;
                text-align: center;
                height: 44px;
                line-height: 44px;
                position: relative;
                a
                  font-size: 15px;
                  color: #fff;
                  display: block;





      .formBox
        border-radius: 0.5em;
        margin: 0em 4% 1em 4%;
        padding: 0 1.6%;
        .user_content
          .form
            li
              border-bottom: #e2e2e2 solid 1px;
              padding: 12px 0 12px 30px;
              position: relative;
              .nameIco
                float: left;
                display: inline;
                width: 17px;
                height: 20px;
                margin: 0px 0 0 -25px;
                background: url(./ico3.png) no-repeat;
                background-size: contain;
              .passwordIco
                border-bottom: #e2e2e2 solid 1px;
                padding: 12px 0 12px 30px;
                position: relative;
                float: left;
                display: inline;
                width: 17px;
                height: 20px;
                margin: 0px 0 0 -25px;
                background: url(./ico4.png) no-repeat;
                background-size: contain;
              input
                display: block;
                height: 21px;
                font-size: 15px;
                border: none;
                padding: 0px;
                color: #666;
                font-family: "Microsoft Yahei",tahoma,arial;
                outline: none;


        .fpw
          text-align: center;
          overflow: hidden
          a
            color: #898989;
            font-size: 1.4em;
            float: right;
            font-weight: normal;
        .loginbtn
          padding-top: 0.5em;
          text-align: center;
          a
            color: #fff;
            display: block;
            letter-spacing: 5px;
            border-radius: 5px;
            background: #2ec975;
            font-size: 15px;
            padding: .6em 0;
            text-align: center;
            font-weight: normal;

        .otherLogins
          .partners
            color: #d7d7d7;
            margin-top: 0.5em;
            font-size: 1.6em;
            text-align: center;

          .partnersList
            padding: 1.5em 0;
            overflow: hidden;
            li
              width: 33.3%;
              padding: 0 1.2em;
              float: left;
              display: inline;
            a
              img
                width: 60%;
                height: auto;
                display: block;
                margin: auto;
                vertical-align: middle;
</style>
