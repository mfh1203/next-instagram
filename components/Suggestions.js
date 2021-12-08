import { useState, useEffect } from "react"
import faker from "faker"

 function Suggestions() {
    const [suggestions,setSuggestions] = useState([])
    useEffect(() => {
        const suggestions=[...Array(5)].map((_,i) =>(
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))
        setSuggestions(suggestions)
    }, [])
    
     return (
         <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="font-bold text-gray-400 ">Suggestion for you</h3>
                <button className=" text-gray-600 font-semibold">See all</button>
            </div>
            {
                suggestions.map(profile => (
                    <div className="flex items-center justify-between mt-3" key={profile.id}>
                            <img className="rounded-full border p-[2px] w-10 h-10"  src={profile.avatar} alt="" />
                            <div className="flex-1 mx-4">
                                <h2 className="font-bold">{profile.username}</h2>
                                <h3 className="text-sm text-gray-400" >Welcome to Instagram</h3>
                            </div>
                            <button className="font-bold text-blue-400">Follow</button>
                    </div>
                ))
            }
         </div>
     )
 }
 
 export default Suggestions
 