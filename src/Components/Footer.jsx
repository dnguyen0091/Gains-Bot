// Footer component
export default function Footer() {
  return (
    <div className="bg-darkGrey2 flex justify-center items-center h-20 w-full fixed bottom-0 left-0 right-0">
      {/* container for the credits perhaps change it to a link to GitHub profile */}
      <div className="flex items-center gap-4">
        <img src="src/assets/github.png" alt="github" id="githubLogo" />
        <p className="text-white">Created by dnguyen0091©</p>
      </div>
    </div>
  );
}