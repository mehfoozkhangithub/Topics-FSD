export const Navbar = () => {
  return `<nav style="display: flex; justify-content: space-evenly; align-items: center">
      <div>
        <img
          width="50"
          style="border-radius: 50%"
          src="../../utils/neu_pass.png"
          alt="logo"
        />
      </div>

      <div style="display: flex; gap: 1rem">
        <span>home</span>
        <span>about</span>
        <span>contact</span>
      </div>

      <div>
        <button>login</button>
      </div>
    </nav>
    
    `;
};

export const NavStyle = () => {
  return `#nav > nav {
        border: 2px solid red;
      }   
    `;
};
