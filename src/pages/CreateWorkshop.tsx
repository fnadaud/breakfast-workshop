import picture1 from "../assets/filling-picture1.png"
import picture2 from "../assets/filling-picture2.png"
import avatar from "../assets/avatar.png"

const MakeBreakFast = () => {
    return (
        <>
            <h2>
                Crée ton propre atelier !
            </h2>
            <div className="workshop">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam velit lacus, a fringilla erat dignissim eget. Nunc porttitor elit vitae tortor rhoncus egestas. Duis euismod tincidunt elit, in lobortis augue. Curabitur bibendum quam lobortis aliquet porta. Proin eget tincidunt diam, id aliquet orci. Quisque semper viverra condimentum. Phasellus eu varius magna, quis blandit lectus. Suspendisse dui urna, vulputate in consectetur ut, venenatis nec neque. Suspendisse potenti. Praesent quam turpis, sagittis id placerat a, hendrerit vitae mauris.
                </p>
                <img className="workshop-picture" src={picture2} />
                <p>
                    Etiam volutpat vulputate faucibus. Phasellus eget sagittis purus, in commodo diam. Sed sit amet sodales purus. Aenean pellentesque lacinia est. Nulla varius risus a posuere dapibus. Donec maximus, nunc in suscipit scelerisque, dui neque faucibus ante, vel dapibus leo purus non nibh. Praesent consectetur magna est, a dictum libero volutpat at. Nullam in purus ac erat tincidunt placerat et in arcu. Praesent tincidunt sit amet libero non tristique. Sed id urna iaculis sapien ornare dignissim in at felis. Nulla dignissim magna ipsum, sed imperdiet dolor ultricies eget. Aenean ultricies rutrum semper. Sed molestie sollicitudin turpis sit amet molestie.
                </p>
                <p>
                    Donec ut mauris eu nisl pellentesque tincidunt. Mauris sed mattis risus. Integer porta ante sit amet ex laoreet venenatis. Proin porta volutpat quam, sed tincidunt diam mollis et. Sed vel mi hendrerit nisi ornare aliquam. Praesent convallis iaculis ante, vitae pharetra felis ullamcorper in. Proin tempus feugiat ante in dictum. Sed lectus magna, porta quis ligula sit amet, ullamcorper ultricies metus. Curabitur porttitor convallis justo sed vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean id erat nec nunc semper vulputate. Donec lobortis a libero vel posuere. Vestibulum interdum velit id interdum feugiat. Curabitur facilisis urna libero, nec rhoncus nulla molestie at. Aenean condimentum fermentum nibh. Integer imperdiet viverra tortor.
                </p>
                <p>
                    Suspendisse volutpat pretium elit, vel pellentesque arcu rutrum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend, neque in tristique tincidunt, lacus ligula finibus sem, eu imperdiet odio ante quis lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean imperdiet mauris eu commodo elementum. Curabitur quis diam iaculis, interdum est a, luctus augue. Etiam commodo ornare eros quis placerat. Vestibulum viverra scelerisque blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <img className="workshop-picture" src={picture1} />
                <p>
                    Quisque ultricies justo dui, eget ullamcorper felis volutpat vitae. Aenean vehicula ac nibh id luctus. Praesent condimentum faucibus arcu in pulvinar. Nam placerat orci posuere lacus ultrices semper. Maecenas pulvinar lobortis lobortis. Etiam sapien eros, condimentum non est sit amet, bibendum commodo dolor. Maecenas eu luctus nisi. Fusce egestas mi id massa pellentesque, at sagittis metus malesuada. Fusce orci augue, luctus at nisi ac, varius feugiat lacus. Etiam erat nisl, vulputate sed congue sed, mollis sit amet metus. Quisque in arcu enim. Nam a gravida lectus, in ultrices justo.
                </p>
                <p>
                    Fusce lectus dui, tempus vel odio eget, aliquam ultrices libero. Nullam pulvinar tortor sit amet est efficitur vulputate. Morbi finibus tincidunt volutpat. Curabitur tempor dapibus nulla, ut scelerisque tellus efficitur et. Fusce sollicitudin in nisl gravida posuere. In malesuada aliquam rutrum. Donec sed cursus tortor. Proin dolor lectus, blandit nec tellus ut, volutpat commodo libero. Etiam at volutpat nunc. Nunc dignissim libero sit amet dolor mattis, eu suscipit magna lacinia. Pellentesque gravida sapien sit amet lacus maximus, et blandit urna convallis. Cras faucibus lorem lorem, eu bibendum felis volutpat ac. Aenean bibendum elit vitae commodo rutrum. Fusce vestibulum egestas ex quis egestas.
                </p>
                <div className="workshop-signature">
                    <img className="workshop-avatar" src={avatar} />
                    <div>Cet atelier vous est proposé par Célie Griffon.</div>
                </div>
            </div>
        </>
    )
}

export default MakeBreakFast