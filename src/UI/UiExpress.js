import getImageUrl from './utils.js'
import {people} from './data.js'

function Profile() {
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    )
}

function TodoList() {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </>
    )
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

function TodoList2(){
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}

function Avatar({person, size}) {
    return (
        <img className="avatar" src={getImageUrl(person)} alt={person.name}
            width={size} height={size} />
    )
}

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

// JavaScript && 표현식은 왼쪽(조건)이 true이면 오른쪽(체크 표시)의 값을 반환
function Item({name, isPacked}) {
    return (
        <li className="item">
            {name} {isPacked && '✅'}
        </li>
    )
}

function List() {
    const listItems = people.map(person => 
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    )
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    )
}

function UiExpress() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            <TodoList />
            <TodoList2 />
            <Avatar size={100} person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}/>
            <Card>
                <Avatar size={100} person={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}} />
            </Card>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
            <List />
        </section>
    )
}

export default UiExpress