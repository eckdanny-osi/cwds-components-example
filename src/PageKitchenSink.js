import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Alert,
  Card,
  Container,
  Icon,
  // Link,
  Row,
  Col,
  Button,
  Badge,
  Nav, NavItem, NavLink,
  NavBar, PageHeader,
  Avatar
} from 'cwds-components';

// import Btn from 'cwds-components/Button';

const dismissAlert = () => {
  alert('You closed the alert!');
}

const imgUrl = 'http://gentlemint-media.s3.amazonaws.com/images/2012/02/16/375c182c.jpg.505x650_q85.jpg';

class KitchenSink extends Component {
  render() {
    return (
      <div>
      <NavBar>

      </NavBar>
      <PageHeader />
      {/* <div className="page-header d-flex">
        <div className="container d-flex flex-row align-items-center">
          <div className="mr-auto p-2 text-white">
            <h2 style={{
              fontSize: '28px',
              fontWeight: 200,
              letterSpacing: '-0.3px',
              textAlign: 'left',
              color: '#ffffff'
            }}>Cambell Family</h2>
          </div>
          <div className="p-2 text-white text-sm">Secondary Actions <Icon name="chevron-down"/></div>
          <div className="p-2">
            <Button className="btn-outline-light">Submit for Review</Button>
          </div>
        </div>
      </div> */}
      <Container>
        <Row>
          <Col className="col-md-4">
        <Nav vertical>

          <NavItem>
            {/* <NavLink>Screener Summary</NavLink> */}
            <Link to="/nav">NAV</Link>
          </NavItem>
          <NavItem>
            <NavLink>Allegations & Disposition</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>People & Roles</NavLink>
            <Nav vertical>
              <NavItem>Chris Cambell</NavItem>
              <NavItem>Katie Cambell</NavItem>
            </Nav>
          </NavItem>
          <NavItem>
            <NavLink>History of Involvement</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Relationships</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contacts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Risk & Safety Assessment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Home Assessment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Decision</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled Link</NavLink>
          </NavItem>
        </Nav>

        <hr />

        <ul className="list-group">
        <a className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <a>Dapibus ac facilisis in</a>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item list-group-item-action">
          <div className="d-flex justify-content-between align-items-center">
          <a>Parent</a>
          <span className="badge badge-primary badge-pill">14</span>
          </div>
          <ul className="list-group">
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <a>Dapibus ac facilisis in</a>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item list-group-item-action">
          <a>FOOOOOO</a>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
          </ul>
        </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span className="badge badge-primary badge-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span className="badge badge-primary badge-pill">1</span>
  </li>
</ul>

          </Col>
          <Col className="col-md-8">

          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item">Action</a>
    <a className="dropdown-item">Another action</a>
    <a className="dropdown-item">Something else here</a>
  </div>
</div>

            <h2>Alerts</h2>
            {/* <Alert type="primary"><strong>Primary</strong> Keep Calm and Carry On!</Alert> */}
            {/* <Alert type="secondary"><strong>Secondary</strong> Just meh!</Alert> */}
            <Alert type="success"><strong>Success</strong> It worked!</Alert>
            <Alert type="info"><strong>Info</strong> Just an FYI...</Alert>
            <Alert type="warning"><strong>Warning</strong> Be careful!</Alert>
            <Alert type="danger"><strong>Danger</strong> Oh nos! Something broke!</Alert>
            <Alert type="danger" onDismiss={dismissAlert}><strong>Danger</strong> Oh nos! Dismiss this alert before my boss sees it</Alert>
            {/* <Alert type="light"><strong>Light</strong> I dunno...</Alert> */}
            {/* <Alert type="dark"><strong>dark</strong> I dunno...</Alert> */}

            <Alert type="info" onDismiss={dismissAlert}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et magna ut risus sollicitudin dapibus at nec mi. Fusce magna augue, tristique vitae velit ac, dictum iaculis turpis. Nullam blandit tincidunt enim, eget porta odio dapibus vel. Fusce quis molestie erat, ac malesuada massa. Curabitur et dui id turpis finibus ullamcorper. Morbi tincidunt mattis metus, non ultricies odio porttitor ac. Ut dictum nunc id ex iaculis, eu tempus orci rutrum. Aliquam aliquam tortor at magna viverra venenatis. Sed aliquet pellentesque tristique. Maecenas molestie commodo orci, id feugiat ligula consequat a. Sed auctor quam vel scelerisque sodales. Duis aliquet lectus ex.
            </Alert>

            <h2>Avatars</h2>
            <Avatar />
            <Avatar imgUrl={imgUrl} />

            <h3>Sizes</h3>

            <p>Small</p>
            Inline <Avatar size="sm" />
            <Avatar size="sm" imgUrl={imgUrl} />
            <p>Medium (default)</p>
            <Avatar />
            <Avatar imgUrl={imgUrl} />
            <p>Large</p>
            <Avatar size="lg" />
            <Avatar size="lg" imgUrl={imgUrl} />

            <h2>Badges</h2>
            <Badge color="primary">Primary</Badge>{' '}
            <Badge color="secondary">Secondary</Badge>{' '}
            <Badge color="success">Success</Badge>{' '}
            <Badge color="danger">Danger</Badge>{' '}
            <Badge color="warning">Warning</Badge>{' '}
            <Badge color="info">Info</Badge>{' '}
            <Badge color="light">Light</Badge>{' '}
            <Badge color="dark">Dark</Badge>{' '}

            <h2>Buttons</h2>
            <h3>Normal Size</h3>
            <Button type="primary">Primary</Button>{' '}
            <Button type="secondary">Secondary</Button>{' '}
            <Button type="success">Success</Button>{' '}
            <Button type="danger">Danger</Button>{' '}
            <Button type="warning">Warning</Button>{' '}
            {/* <Button type="info">Info</Button>{' '} */}
            <Button type="light">Light</Button>{' '}
            {/* <Button type="dark">Dark</Button>{' '} */}
            <Button type="link">Link</Button>

            <h3>Smaller buttons</h3>
            <Button type="primary" size="sm">Primary</Button>{' '}
            <Button type="secondary" size="sm">Secondary</Button>{' '}
            <Button type="success" size="sm">Success</Button>{' '}
            <Button type="danger" size="sm">Danger</Button>{' '}
            <Button type="warning" size="sm">Warning</Button>{' '}
            <h3>Bigger buttons</h3>
            <Button type="primary" size="lg">Primary</Button>{' '}
            <Button type="secondary" size="lg">Secondary</Button>{' '}
            <Button type="success" size="lg">Success</Button>{' '}
            <Button type="danger" size="lg">Danger</Button>{' '}
            <Button type="warning" size="lg">Warning</Button>{' '}

            <h2>Cards</h2>
            <Card>
            <div className="card-body">I am a <tt>Card</tt></div>
            </Card>
            <br />
            <div className="card">
            <div className="card-header">
                Card Header
                <div className="card-actions">
                <Button type="link" size="sm">Edit</Button>
                </div>
            </div>
            <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac fermentum elit, quis imperdiet nunc. Sed varius, urna eget lobortis consequat, massa sem sollicitudin eros, a dignissim justo libero bibendum libero. Phasellus et nibh neque. Fusce congue tempor mauris, a bibendum diam consectetur quis. Mauris eget mollis lectus. Nunc varius porttitor nisi, eu dapibus ipsum bibendum eget. Aliquam libero ante, fringilla non tristique nec, porttitor a lacus. Duis convallis odio quis ex porta, ut posuere justo feugiat. In hac habitasse platea dictumst.
            </div>
            <div className="card-footer text-right">
                <div className="card-actions">
                <Button type="link" size="sm">Cancel</Button>
                <Button type="primary" size="sm">Save</Button>
                </div>
            </div>
            </div>

            <h2>Grid</h2>

            <Container>
            I am in a <tt>Container</tt>!
            </Container>
            <Container fluid>
            I am in a <tt>Fluid Container</tt>!
            </Container>
            <h3>All together now...</h3>
            <Container>
            <Row>
                <Col style={{ border: "1px solid red" }}>one</Col>
                <Col style={{ border: "1px solid blue" }}>two</Col>
                <Col style={{ border: "1px solid green" }}>three</Col>
            </Row>
            </Container>

            <h2>Icons</h2>
            <Icon name="500px" /> <Icon name="address-book" /> <Icon name="address-book-o" /> <Icon name="address-card" /> <Icon name="address-card-o" /> <Icon name="adjust" /> <Icon name="adn" /> <Icon name="align-center" /> <Icon name="align-justify" /> <Icon name="align-left" /> <Icon name="align-right" /> <Icon name="amazon" /> <Icon name="ambulance" /> <Icon name="american-sign-language-interpreting" /> <Icon name="anchor" /> <Icon name="android" /> <Icon name="angellist" /> <Icon name="angle-double-down" /> <Icon name="angle-double-left" /> <Icon name="angle-double-right" /> <Icon name="angle-double-up" /> <Icon name="angle-down" /> <Icon name="angle-left" /> <Icon name="angle-right" /> <Icon name="angle-up" /> <Icon name="apple" /> <Icon name="archive" /> <Icon name="area-chart" /> <Icon name="arrow-circle-down" /> <Icon name="arrow-circle-left" /> <Icon name="arrow-circle-o-down" /> <Icon name="arrow-circle-o-left" /> <Icon name="arrow-circle-o-right" /> <Icon name="arrow-circle-o-up" /> <Icon name="arrow-circle-right" /> <Icon name="arrow-circle-up" /> <Icon name="arrow-down" /> <Icon name="arrow-left" /> <Icon name="arrow-right" /> <Icon name="arrow-up" /> <Icon name="arrows" /> <Icon name="arrows-alt" /> <Icon name="arrows-h" /> <Icon name="arrows-v" /> <Icon name="asl-interpreting" /> <Icon name="assistive-listening-systems" /> <Icon name="asterisk" /> <Icon name="at" /> <Icon name="audio-description" /> <Icon name="automobile" /> <Icon name="backward" /> <Icon name="balance-scale" /> <Icon name="ban" /> <Icon name="bandcamp" /> <Icon name="bank" /> <Icon name="bar-chart" /> <Icon name="bar-chart-o" /> <Icon name="barcode" /> <Icon name="bars" /> <Icon name="bath" /> <Icon name="bathtub" /> <Icon name="battery" /> <Icon name="battery-0" /> <Icon name="battery-1" /> <Icon name="battery-2" /> <Icon name="battery-3" /> <Icon name="battery-4" /> <Icon name="battery-empty" /> <Icon name="battery-full" /> <Icon name="battery-half" /> <Icon name="battery-quarter" /> <Icon name="battery-three-quarters" /> <Icon name="bed" /> <Icon name="beer" /> <Icon name="behance" /> <Icon name="behance-square" /> <Icon name="bell" /> <Icon name="bell-o" /> <Icon name="bell-slash" /> <Icon name="bell-slash-o" /> <Icon name="bicycle" /> <Icon name="binoculars" /> <Icon name="birthday-cake" /> <Icon name="bitbucket" /> <Icon name="bitbucket-square" /> <Icon name="bitcoin" /> <Icon name="black-tie" /> <Icon name="blind" /> <Icon name="bluetooth" /> <Icon name="bluetooth-b" /> <Icon name="bold" /> <Icon name="bolt" /> <Icon name="bomb" /> <Icon name="book" /> <Icon name="bookmark" /> <Icon name="bookmark-o" /> <Icon name="braille" /> <Icon name="briefcase" /> <Icon name="btc" /> <Icon name="bug" /> <Icon name="building" /> <Icon name="building-o" /> <Icon name="bullhorn" /> <Icon name="bullseye" /> <Icon name="bus" /> <Icon name="buysellads" /> <Icon name="cab" /> <Icon name="calculator" /> <Icon name="calendar" /> <Icon name="calendar-check-o" /> <Icon name="calendar-minus-o" /> <Icon name="calendar-o" /> <Icon name="calendar-plus-o" /> <Icon name="calendar-times-o" /> <Icon name="camera" /> <Icon name="camera-retro" /> <Icon name="car" /> <Icon name="caret-down" /> <Icon name="caret-left" /> <Icon name="caret-right" /> <Icon name="caret-square-o-down" /> <Icon name="caret-square-o-left" /> <Icon name="caret-square-o-right" /> <Icon name="caret-square-o-up" /> <Icon name="caret-up" /> <Icon name="cart-arrow-down" /> <Icon name="cart-plus" /> <Icon name="cc" /> <Icon name="cc-amex" /> <Icon name="cc-diners-club" /> <Icon name="cc-discover" /> <Icon name="cc-jcb" /> <Icon name="cc-mastercard" /> <Icon name="cc-paypal" /> <Icon name="cc-stripe" /> <Icon name="cc-visa" /> <Icon name="certificate" /> <Icon name="chain" /> <Icon name="chain-broken" /> <Icon name="check" /> <Icon name="check-circle" /> <Icon name="check-circle-o" /> <Icon name="check-square" /> <Icon name="check-square-o" /> <Icon name="chevron-circle-down" /> <Icon name="chevron-circle-left" /> <Icon name="chevron-circle-right" /> <Icon name="chevron-circle-up" /> <Icon name="chevron-down" /> <Icon name="chevron-left" /> <Icon name="chevron-right" /> <Icon name="chevron-up" /> <Icon name="child" /> <Icon name="chrome" /> <Icon name="circle" /> <Icon name="circle-o" /> <Icon name="circle-o-notch" /> <Icon name="circle-thin" /> <Icon name="clipboard" /> <Icon name="clock-o" /> <Icon name="clone" /> <Icon name="close" /> <Icon name="cloud" /> <Icon name="cloud-download" /> <Icon name="cloud-upload" /> <Icon name="cny" /> <Icon name="code" /> <Icon name="code-fork" /> <Icon name="codepen" /> <Icon name="codiepie" /> <Icon name="coffee" /> <Icon name="cog" /> <Icon name="cogs" /> <Icon name="columns" /> <Icon name="comment" /> <Icon name="comment-o" /> <Icon name="commenting" /> <Icon name="commenting-o" /> <Icon name="comments" /> <Icon name="comments-o" /> <Icon name="compass" /> <Icon name="compress" /> <Icon name="connectdevelop" /> <Icon name="contao" /> <Icon name="copy" /> <Icon name="copyright" /> <Icon name="creative-commons" /> <Icon name="credit-card" /> <Icon name="credit-card-alt" /> <Icon name="crop" /> <Icon name="crosshairs" /> <Icon name="css3" /> <Icon name="cube" /> <Icon name="cubes" /> <Icon name="cut" /> <Icon name="cutlery" /> <Icon name="dashboard" /> <Icon name="dashcube" /> <Icon name="database" /> <Icon name="deaf" /> <Icon name="deafness" /> <Icon name="dedent" /> <Icon name="delicious" /> <Icon name="desktop" /> <Icon name="deviantart" /> <Icon name="diamond" /> <Icon name="digg" /> <Icon name="dollar" /> <Icon name="dot-circle-o" /> <Icon name="download" /> <Icon name="dribbble" /> <Icon name="drivers-license" /> <Icon name="drivers-license-o" /> <Icon name="dropbox" /> <Icon name="drupal" /> <Icon name="edge" /> <Icon name="edit" /> <Icon name="eercast" /> <Icon name="eject" /> <Icon name="ellipsis-h" /> <Icon name="ellipsis-v" /> <Icon name="empire" /> <Icon name="envelope" /> <Icon name="envelope-o" /> <Icon name="envelope-open" /> <Icon name="envelope-open-o" /> <Icon name="envelope-square" /> <Icon name="envira" /> <Icon name="eraser" /> <Icon name="etsy" /> <Icon name="eur" /> <Icon name="euro" /> <Icon name="exchange" /> <Icon name="exclamation" /> <Icon name="exclamation-circle" /> <Icon name="exclamation-triangle" /> <Icon name="expand" /> <Icon name="expeditedssl" /> <Icon name="external-link" /> <Icon name="external-link-square" /> <Icon name="eye" /> <Icon name="eye-slash" /> <Icon name="eyedropper" /> <Icon name="fa" /> <Icon name="facebook" /> <Icon name="facebook-f" /> <Icon name="facebook-official" /> <Icon name="facebook-square" /> <Icon name="fast-backward" /> <Icon name="fast-forward" /> <Icon name="fax" /> <Icon name="feed" /> <Icon name="female" /> <Icon name="fighter-jet" /> <Icon name="file" /> <Icon name="file-archive-o" /> <Icon name="file-audio-o" /> <Icon name="file-code-o" /> <Icon name="file-excel-o" /> <Icon name="file-image-o" /> <Icon name="file-movie-o" /> <Icon name="file-o" /> <Icon name="file-pdf-o" /> <Icon name="file-photo-o" /> <Icon name="file-picture-o" /> <Icon name="file-powerpoint-o" /> <Icon name="file-sound-o" /> <Icon name="file-text" /> <Icon name="file-text-o" /> <Icon name="file-video-o" /> <Icon name="file-word-o" /> <Icon name="file-zip-o" /> <Icon name="files-o" /> <Icon name="film" /> <Icon name="filter" /> <Icon name="fire" /> <Icon name="fire-extinguisher" /> <Icon name="firefox" /> <Icon name="first-order" /> <Icon name="flag" /> <Icon name="flag-checkered" /> <Icon name="flag-o" /> <Icon name="flash" /> <Icon name="flask" /> <Icon name="flickr" /> <Icon name="floppy-o" /> <Icon name="folder" /> <Icon name="folder-o" /> <Icon name="folder-open" /> <Icon name="folder-open-o" /> <Icon name="font" /> <Icon name="font-awesome" /> <Icon name="fonticons" /> <Icon name="fort-awesome" /> <Icon name="forumbee" /> <Icon name="forward" /> <Icon name="foursquare" /> <Icon name="free-code-camp" /> <Icon name="frown-o" /> <Icon name="futbol-o" /> <Icon name="gamepad" /> <Icon name="gavel" /> <Icon name="gbp" /> <Icon name="ge" /> <Icon name="gear" /> <Icon name="gears" /> <Icon name="genderless" /> <Icon name="get-pocket" /> <Icon name="gg" /> <Icon name="gg-circle" /> <Icon name="gift" /> <Icon name="git" /> <Icon name="git-square" /> <Icon name="github" /> <Icon name="github-alt" /> <Icon name="github-square" /> <Icon name="gitlab" /> <Icon name="gittip" /> <Icon name="glass" /> <Icon name="glide" /> <Icon name="glide-g" /> <Icon name="globe" /> <Icon name="google" /> <Icon name="google-plus" /> <Icon name="google-plus-circle" /> <Icon name="google-plus-official" /> <Icon name="google-plus-square" /> <Icon name="google-wallet" /> <Icon name="graduation-cap" /> <Icon name="gratipay" /> <Icon name="grav" /> <Icon name="group" /> <Icon name="h-square" /> <Icon name="hacker-news" /> <Icon name="hand-grab-o" /> <Icon name="hand-lizard-o" /> <Icon name="hand-o-down" /> <Icon name="hand-o-left" /> <Icon name="hand-o-right" /> <Icon name="hand-o-up" /> <Icon name="hand-paper-o" /> <Icon name="hand-peace-o" /> <Icon name="hand-pointer-o" /> <Icon name="hand-rock-o" /> <Icon name="hand-scissors-o" /> <Icon name="hand-spock-o" /> <Icon name="hand-stop-o" /> <Icon name="handshake-o" /> <Icon name="hard-of-hearing" /> <Icon name="hashtag" /> <Icon name="hdd-o" /> <Icon name="header" /> <Icon name="headphones" /> <Icon name="heart" /> <Icon name="heart-o" /> <Icon name="heartbeat" /> <Icon name="history" /> <Icon name="home" /> <Icon name="hospital-o" /> <Icon name="hotel" /> <Icon name="hourglass" /> <Icon name="hourglass-1" /> <Icon name="hourglass-2" /> <Icon name="hourglass-3" /> <Icon name="hourglass-end" /> <Icon name="hourglass-half" /> <Icon name="hourglass-o" /> <Icon name="hourglass-start" /> <Icon name="houzz" /> <Icon name="html5" /> <Icon name="i-cursor" /> <Icon name="id-badge" /> <Icon name="id-card" /> <Icon name="id-card-o" /> <Icon name="ils" /> <Icon name="image" /> <Icon name="imdb" /> <Icon name="inbox" /> <Icon name="indent" /> <Icon name="industry" /> <Icon name="info" /> <Icon name="info-circle" /> <Icon name="inr" /> <Icon name="instagram" /> <Icon name="institution" /> <Icon name="internet-explorer" /> <Icon name="intersex" /> <Icon name="ioxhost" /> <Icon name="italic" /> <Icon name="joomla" /> <Icon name="jpy" /> <Icon name="jsfiddle" /> <Icon name="key" /> <Icon name="keyboard-o" /> <Icon name="krw" /> <Icon name="language" /> <Icon name="laptop" /> <Icon name="lastfm" /> <Icon name="lastfm-square" /> <Icon name="leaf" /> <Icon name="leanpub" /> <Icon name="legal" /> <Icon name="lemon-o" /> <Icon name="level-down" /> <Icon name="level-up" /> <Icon name="life-bouy" /> <Icon name="life-buoy" /> <Icon name="life-ring" /> <Icon name="life-saver" /> <Icon name="lightbulb-o" /> <Icon name="line-chart" /> <Icon name="link" /> <Icon name="linkedin" /> <Icon name="linkedin-square" /> <Icon name="linode" /> <Icon name="linux" /> <Icon name="list" /> <Icon name="list-alt" /> <Icon name="list-ol" /> <Icon name="list-ul" /> <Icon name="location-arrow" /> <Icon name="lock" /> <Icon name="long-arrow-down" /> <Icon name="long-arrow-left" /> <Icon name="long-arrow-right" /> <Icon name="long-arrow-up" /> <Icon name="low-vision" /> <Icon name="magic" /> <Icon name="magnet" /> <Icon name="mail-forward" /> <Icon name="mail-reply" /> <Icon name="mail-reply-all" /> <Icon name="male" /> <Icon name="map" /> <Icon name="map-marker" /> <Icon name="map-o" /> <Icon name="map-pin" /> <Icon name="map-signs" /> <Icon name="mars" /> <Icon name="mars-double" /> <Icon name="mars-stroke" /> <Icon name="mars-stroke-h" /> <Icon name="mars-stroke-v" /> <Icon name="maxcdn" /> <Icon name="meanpath" /> <Icon name="medium" /> <Icon name="medkit" /> <Icon name="meetup" /> <Icon name="meh-o" /> <Icon name="mercury" /> <Icon name="microchip" /> <Icon name="microphone" /> <Icon name="microphone-slash" /> <Icon name="minus" /> <Icon name="minus-circle" /> <Icon name="minus-square" /> <Icon name="minus-square-o" /> <Icon name="mixcloud" /> <Icon name="mobile" /> <Icon name="mobile-phone" /> <Icon name="modx" /> <Icon name="money" /> <Icon name="moon-o" /> <Icon name="mortar-board" /> <Icon name="motorcycle" /> <Icon name="mouse-pointer" /> <Icon name="music" /> <Icon name="navicon" /> <Icon name="neuter" /> <Icon name="newspaper-o" /> <Icon name="object-group" /> <Icon name="object-ungroup" /> <Icon name="odnoklassniki" /> <Icon name="odnoklassniki-square" /> <Icon name="opencart" /> <Icon name="openid" /> <Icon name="opera" /> <Icon name="optin-monster" /> <Icon name="outdent" /> <Icon name="pagelines" /> <Icon name="paint-brush" /> <Icon name="paper-plane" /> <Icon name="paper-plane-o" /> <Icon name="paperclip" /> <Icon name="paragraph" /> <Icon name="paste" /> <Icon name="pause" /> <Icon name="pause-circle" /> <Icon name="pause-circle-o" /> <Icon name="paw" /> <Icon name="paypal" /> <Icon name="pencil" /> <Icon name="pencil-square" /> <Icon name="pencil-square-o" /> <Icon name="percent" /> <Icon name="phone" /> <Icon name="phone-square" /> <Icon name="photo" /> <Icon name="picture-o" /> <Icon name="pie-chart" /> <Icon name="pied-piper" /> <Icon name="pied-piper-alt" /> <Icon name="pied-piper-pp" /> <Icon name="pinterest" /> <Icon name="pinterest-p" /> <Icon name="pinterest-square" /> <Icon name="plane" /> <Icon name="play" /> <Icon name="play-circle" /> <Icon name="play-circle-o" /> <Icon name="plug" /> <Icon name="plus" /> <Icon name="plus-circle" /> <Icon name="plus-square" /> <Icon name="plus-square-o" /> <Icon name="podcast" /> <Icon name="power-off" /> <Icon name="print" /> <Icon name="product-hunt" /> <Icon name="puzzle-piece" /> <Icon name="qq" /> <Icon name="qrcode" /> <Icon name="question" /> <Icon name="question-circle" /> <Icon name="question-circle-o" /> <Icon name="quora" /> <Icon name="quote-left" /> <Icon name="quote-right" /> <Icon name="ra" /> <Icon name="random" /> <Icon name="ravelry" /> <Icon name="rebel" /> <Icon name="recycle" /> <Icon name="reddit" /> <Icon name="reddit-alien" /> <Icon name="reddit-square" /> <Icon name="refresh" /> <Icon name="registered" /> <Icon name="remove" /> <Icon name="renren" /> <Icon name="reorder" /> <Icon name="repeat" /> <Icon name="reply" /> <Icon name="reply-all" /> <Icon name="resistance" /> <Icon name="retweet" /> <Icon name="rmb" /> <Icon name="road" /> <Icon name="rocket" /> <Icon name="rotate-left" /> <Icon name="rotate-right" /> <Icon name="rouble" /> <Icon name="rss" /> <Icon name="rss-square" /> <Icon name="rub" /> <Icon name="ruble" /> <Icon name="rupee" /> <Icon name="s15" /> <Icon name="safari" /> <Icon name="save" /> <Icon name="scissors" /> <Icon name="scribd" /> <Icon name="search" /> <Icon name="search-minus" /> <Icon name="search-plus" /> <Icon name="sellsy" /> <Icon name="send" /> <Icon name="send-o" /> <Icon name="server" /> <Icon name="share" /> <Icon name="share-alt" /> <Icon name="share-alt-square" /> <Icon name="share-square" /> <Icon name="share-square-o" /> <Icon name="shekel" /> <Icon name="sheqel" /> <Icon name="shield" /> <Icon name="ship" /> <Icon name="shirtsinbulk" /> <Icon name="shopping-bag" /> <Icon name="shopping-basket" /> <Icon name="shopping-cart" /> <Icon name="shower" /> <Icon name="sign-in" /> <Icon name="sign-language" /> <Icon name="sign-out" /> <Icon name="signal" /> <Icon name="signing" /> <Icon name="simplybuilt" /> <Icon name="sitemap" /> <Icon name="skyatlas" /> <Icon name="skype" /> <Icon name="slack" /> <Icon name="sliders" /> <Icon name="slideshare" /> <Icon name="smile-o" /> <Icon name="snapchat" /> <Icon name="snapchat-ghost" /> <Icon name="snapchat-square" /> <Icon name="snowflake-o" /> <Icon name="soccer-ball-o" /> <Icon name="sort" /> <Icon name="sort-alpha-asc" /> <Icon name="sort-alpha-desc" /> <Icon name="sort-amount-asc" /> <Icon name="sort-amount-desc" /> <Icon name="sort-asc" /> <Icon name="sort-desc" /> <Icon name="sort-down" /> <Icon name="sort-numeric-asc" /> <Icon name="sort-numeric-desc" /> <Icon name="sort-up" /> <Icon name="soundcloud" /> <Icon name="space-shuttle" /> <Icon name="spinner" /> <Icon name="spoon" /> <Icon name="spotify" /> <Icon name="square" /> <Icon name="square-o" /> <Icon name="stack-exchange" /> <Icon name="stack-overflow" /> <Icon name="star" /> <Icon name="star-half" /> <Icon name="star-half-empty" /> <Icon name="star-half-full" /> <Icon name="star-half-o" /> <Icon name="star-o" /> <Icon name="steam" /> <Icon name="steam-square" /> <Icon name="step-backward" /> <Icon name="step-forward" /> <Icon name="stethoscope" /> <Icon name="sticky-note" /> <Icon name="sticky-note-o" /> <Icon name="stop" /> <Icon name="stop-circle" /> <Icon name="stop-circle-o" /> <Icon name="street-view" /> <Icon name="strikethrough" /> <Icon name="stumbleupon" /> <Icon name="stumbleupon-circle" /> <Icon name="subscript" /> <Icon name="subway" /> <Icon name="suitcase" /> <Icon name="sun-o" /> <Icon name="superpowers" /> <Icon name="superscript" /> <Icon name="support" /> <Icon name="table" /> <Icon name="tablet" /> <Icon name="tachometer" /> <Icon name="tag" /> <Icon name="tags" /> <Icon name="tasks" /> <Icon name="taxi" /> <Icon name="telegram" /> <Icon name="television" /> <Icon name="tencent-weibo" /> <Icon name="terminal" /> <Icon name="text-height" /> <Icon name="text-width" /> <Icon name="th" /> <Icon name="th-large" /> <Icon name="th-list" /> <Icon name="themeisle" /> <Icon name="thermometer" /> <Icon name="thermometer-0" /> <Icon name="thermometer-1" /> <Icon name="thermometer-2" /> <Icon name="thermometer-3" /> <Icon name="thermometer-4" /> <Icon name="thermometer-empty" /> <Icon name="thermometer-full" /> <Icon name="thermometer-half" /> <Icon name="thermometer-quarter" /> <Icon name="thermometer-three-quarters" /> <Icon name="thumb-tack" /> <Icon name="thumbs-down" /> <Icon name="thumbs-o-down" /> <Icon name="thumbs-o-up" /> <Icon name="thumbs-up" /> <Icon name="ticket" /> <Icon name="times" /> <Icon name="times-circle" /> <Icon name="times-circle-o" /> <Icon name="times-rectangle" /> <Icon name="times-rectangle-o" /> <Icon name="tint" /> <Icon name="toggle-down" /> <Icon name="toggle-left" /> <Icon name="toggle-off" /> <Icon name="toggle-on" /> <Icon name="toggle-right" /> <Icon name="toggle-up" /> <Icon name="trademark" /> <Icon name="train" /> <Icon name="transgender" /> <Icon name="transgender-alt" /> <Icon name="trash" /> <Icon name="trash-o" /> <Icon name="tree" /> <Icon name="trello" /> <Icon name="tripadvisor" /> <Icon name="trophy" /> <Icon name="truck" /> <Icon name="try" /> <Icon name="tty" /> <Icon name="tumblr" /> <Icon name="tumblr-square" /> <Icon name="turkish-lira" /> <Icon name="tv" /> <Icon name="twitch" /> <Icon name="twitter" /> <Icon name="twitter-square" /> <Icon name="umbrella" /> <Icon name="underline" /> <Icon name="undo" /> <Icon name="universal-access" /> <Icon name="university" /> <Icon name="unlink" /> <Icon name="unlock" /> <Icon name="unlock-alt" /> <Icon name="unsorted" /> <Icon name="upload" /> <Icon name="usb" /> <Icon name="usd" /> <Icon name="user" /> <Icon name="user-circle" /> <Icon name="user-circle-o" /> <Icon name="user-md" /> <Icon name="user-o" /> <Icon name="user-plus" /> <Icon name="user-secret" /> <Icon name="user-times" /> <Icon name="users" /> <Icon name="vcard" /> <Icon name="vcard-o" /> <Icon name="venus" /> <Icon name="venus-double" /> <Icon name="venus-mars" /> <Icon name="viacoin" /> <Icon name="viadeo" /> <Icon name="viadeo-square" /> <Icon name="video-camera" /> <Icon name="vimeo" /> <Icon name="vimeo-square" /> <Icon name="vine" /> <Icon name="vk" /> <Icon name="volume-control-phone" /> <Icon name="volume-down" /> <Icon name="volume-off" /> <Icon name="volume-up" /> <Icon name="warning" /> <Icon name="wechat" /> <Icon name="weibo" /> <Icon name="weixin" /> <Icon name="whatsapp" /> <Icon name="wheelchair" /> <Icon name="wheelchair-alt" /> <Icon name="wifi" /> <Icon name="wikipedia-w" /> <Icon name="window-close" /> <Icon name="window-close-o" /> <Icon name="window-maximize" /> <Icon name="window-minimize" /> <Icon name="window-restore" /> <Icon name="windows" /> <Icon name="won" /> <Icon name="wordpress" /> <Icon name="wpbeginner" /> <Icon name="wpexplorer" /> <Icon name="wpforms" /> <Icon name="wrench" /> <Icon name="xing" /> <Icon name="xing-square" /> <Icon name="y-combinator" /> <Icon name="y-combinator-square" /> <Icon name="yahoo" /> <Icon name="yc" /> <Icon name="yc-square" /> <Icon name="yelp" /> <Icon name="yen" /> <Icon name="yoast" /> <Icon name="youtube" /> <Icon name="youtube-play" /> <Icon name="youtube-square" /> 
            </Col>
        </Row>
      </Container>
      <br />
      <div style={{backgroundColor: "red"}}>
                <Container><div className="text-center">The End</div></Container>
            </div>
      </div>
    );
  }
}

export default KitchenSink;
