import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics'
import statisticalData from './statistical-data.json'
import friends from './friends.json';
import FriendList from './components/Friends/FriendList'
import transactions from './transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

export default function App() {
    return (
         <div>
             <Profile
                 name={user.name}
                 tag={user.tag}
                 location={user.location}
                 avatarUrl={user.avatar}
                 followers={user.stats.followers}
                 views={user.stats.views}
                 likes={user.stats.likes}
            />
            <Statistics title="Upload stats" items={statisticalData} />
            <Statistics items={statisticalData} /> 
            <FriendList friends={friends} />
            <TransactionHistory items={transactions}/>
        </div>
     )
}