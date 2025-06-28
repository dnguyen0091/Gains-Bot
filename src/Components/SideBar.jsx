

// Header component
export default function SideBar() {
  return (
    <div className="bg-[--primary] flex  flex-col justify-start items-start h-[100vh] w-[10vw] fixed top-0 left-0 right-0 px-4 py-2">
      {/* Header of SideBar */}
      <div className="flex flex-row">
        <img src="src/assets/Logo.png" alt="Logo" className="w-[3vw]"/>
        <img src="src/assets/Icons/sidebarCollapse.png" alt="sideBarCollapse" className="w-[3vw]"/>
      </div>

      {/* Footer of SideBar */}
      <div className="absolute bottom-4 left-4 flex flex-row items-center gap-2">
        <a href="https://github.com/dnguyen0091" target="_blank"><img src="src/assets/github.png" alt="github" className="w-[3vh]"/></a>
        <a href="https://github.com/dnguyen0091" target="_blank" className="text-[--text-primary] text-xs text-center">Created by dnguyen0091 ©</a>
      </div>
    </div>
  );


  
}