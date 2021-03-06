import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto xl:grid-cols-3">
            
            {/* section */}
            <section className="col-span-2">
                {/* Stories  */}
                <Stories />
                {/* Post */}
                <Posts />
            </section>
                
            <section className="hidden lg:inline-grid md:col-span-1">
                <div className="fixed top-10">
                    <MiniProfile/>                
                    <Suggestions />
                </div>
            </section>

        </main>
    )
}

export default Feed
