

// Header component
export default function Header() {
  return (
    <div className="bg-[--primary] flex justify-start items-start h-[100vh] w-[10vw] fixed top-0 left-0 right-0 px-4 py-2">
      {/* Header of SideBar */}
      <div>
        <img src="src/assets/Logo.png" alt="Logo" className="w-[3vw]"/>
        <img src="src/assets/Icons/sidebarCollapse.png" alt="sideBarCollapse" className="w-[3vw]"/>
      </div>
      
    </div>
  );


  
}