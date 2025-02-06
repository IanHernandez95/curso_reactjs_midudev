import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'iiann_x4',
    name: 'Ian Hernandez',
    isFollowing: false
  },
  {
    userName: '24HorasTVN',
    name: '24 Horas',
    isFollowing: true
  },
  {
    userName: 'victorabadf1',
    name: 'Victor Abad',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing} )=>  (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        )
      }
    </section>
  )
}