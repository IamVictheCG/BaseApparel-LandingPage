import "./BodyBaase.css"
function BodyBase() {
  let svg = <svg  color= "yellow" xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg>

  return (
    <div className="body">
      <h3 className="pbod">WE'RE</h3>
      <h3 className="pbod">COMING</h3>
      <h3 className="pbod">SOON</h3>
      <div className="p">
        <p className= "pp">Hello fellow shoppers! We're currently building our fashion store. Add your email to stay connected and up-to-date with announcements and oour launch deals</p>            
      </div>
      <div>
      <input type="email" name="email" id="mail" placeholder="Email address" />
      <h1>{svg}</h1>   
      </div>

    </div>
  )
}

export default BodyBase
