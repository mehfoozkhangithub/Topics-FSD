export const All_style = () => {
  return ` * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 600;
      }
      h1 {
        text-align: center;
        margin: 1rem 0;
      }
      nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1.5rem;
        box-shadow: 10px 10px 40px 2px gray;
        padding: 20px;
      }

      ul {
        display: contents;
      }
      
      form{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:1.5rem; 
      width:60% ;   
      margin:auto;
      flex-wrap:wrap
      padding:3rem 0
      }

    form>div:first-child{
      display:flex;
      flex-direction:column
      }   
      
      div[name="btn"]{
      display:flex;
      justify-content:center;
      padding:1.5rem 0px
      }

      div[name="btn"]>input, fieldset{
      padding:10px 20px
      }     

      .message{
      color:red;
      font-size:0.9rem;
      margin-top:5px;
      }

      header{
      cursor:pointer;
      }
      `;
};

export const Navbar = () => {
  return ` <nav>
      <ul>
        <li id="signupNav">signup</li>
        <li id="loginNav">login</li>
        <li id="adminNav">all_user</li>
      </ul>
    </nav>
    `;
};

export const signup = () => {
  return `
    <form id="signupForm">
        <div>
            <div>
                <label for="name">name</label>
                <input id="name" type="text">
                <span class="message"></span>
            </div>
            <br>           
            
            <div>
                <label for="email">email</label>
                <input id="email" type="text">
                <span class="message"></span>
            </div>
            <br>

            <div>
                <label for="phone">phone</label>
                <input id="phone" type="text">
                <span class="message"></span>
            </div>

        </div>

            <div>
            <br>
                <div>
                    <label for="pass">password</label>
                    <input id="pass" type="text">
                    <span class="message"></span>
                </div>
            <br>


                <div>
                    <label for="confirm_pass">confirm password</label>
                    <input id="confirm_pass" type="text">
                    <span class="message"></span>
                </div>
            <br>


                <div>
                    <fieldset>
                    <legend>gender</legend>
                    <label for="male">male</label>
                    <input id="male" value="male" name="gender" type="radio" />

                    <label for="female">female</label>
                    <input id="female" value="female" name="gender" type="radio" />

                    <label for="other">other</label>
                    <input id="other" value="other" name="gender" type="radio" />
                    </fieldset>
                </div>

            </div>

            <input type="submit" value="button">
    </form>
   
    
    `;
};

export const login = () => {
  return ` <form id="loginForm">
            <div>         
                    <div>
                        <label for="email">email</label>
                        <input id="email" type="text">
                        <span class="message"></span>
                    </div>
                <br>
                    <div>
                        <label for="pass">password</label>
                        <input id="pass" type="text">
                        <span class="message"></span>
                    </div>
                <br>                
            </div>
                <input type="submit" value="login">
            </form>
    
    `;
};

export const admin = () => {
  //
  /* 
  192.158.1.1
  user:admin
  pass:admin123  
  */
};
