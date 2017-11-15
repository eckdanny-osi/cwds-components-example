import React from 'react';
import './PageNav.css';

const PageNav = () => (
<div>
  <div class="jumbotron mb-0 d-flex align-items-center flex-column justify-content-center min-100" id="header">
    <h1 class="display-3">Hey, there.</h1>
    <p>Some perfectly centered content goes here</p>
    <p class="lead">
        <a class="btn btn-outline-secondary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
<nav class="navbar navbar-light navbar-expand-lg">
  <div class="container">
      <a class="navbar-brand" href="#">Brand</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
          </ul>
          <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a href="#modal1" data-toggle="modal" class="nav-link">Modal</a></li>
          </ul>
      </div>
  </div>
</nav>
<div class="container h-10" id="content">
  <div class="row h-100 mt-5">
      <aside class="col-md-2">
          <div class="mt-5 mb-3" id="sidemenu">
              <ul class="nav flex-md-column flex-row justify-content-between">
                  <li class="nav-item"><a href="#sec1" class="nav-link active pl-0">One</a></li>
                  <li class="nav-item"><a href="#sec2" class="nav-link pl-0">Two</a></li>
                  <li class="nav-item">
                      <a href="#sec3" class="nav-link pl-0">Three</a>
                      <ul class="nav flex-md-column ml-2 hidden-sm-down">
                          <li class="nav-item"><a href="#sec3a" class="nav-link">Section A</a></li>
                          <li class="nav-item"><a href="#sec3b" class="nav-link">Section B</a></li>
                      </ul>
                  </li>
                  <li class="nav-item"><a href="#sec4" class="nav-link pl-0">Four</a></li>
                  <li class="nav-item"><a href="#sec5" class="nav-link pl-0">Five</a></li>
                  <li class="nav-item"><a href="#sec6" class="nav-link pl-0">Six</a></li>
              </ul>
          </div>
      </aside>
      <main class="col py-5">
          <div class="row">
              <div class="col">
                  <ul class="nav nav-tabs small" role="tablist">
                      <li class="nav-item"><a class="nav-link text-uppercase active" data-toggle="tab" href="#tab1" role="tab">Home</a></li>
                      <li class="nav-item ml-auto"><a class="nav-link text-uppercase" data-toggle="tab" href="#tab2" role="tab">List</a></li>
                      <li class="nav-item"><a class="nav-link text-uppercase" data-toggle="tab" href="#tab3" role="tab">More</a></li>
                  </ul>
                  <div class="tab-content py-3">
                      <div class="tab-pane active" id="tab1" role="tabpanel">
                          <h2 class="mb-3">Beautiful Content</h2>
                          
                          <span class="anchor" id="sec1"></span>
                          <h5>One</h5>
                          <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote
                              bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics
                              ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>

                          <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                              slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>

                          <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote
                              bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics
                              ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>


                          <span class="anchor" id="sec2"></span>
                          <h5>Two</h5>
                          <p>Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy
                              messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                              lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
                              
                          <p>Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                              slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>


                          <hr />

                          <span class="anchor" id="sec3"></span>
                          <h5>Three</h5>
                          <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                              slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                              
                          <div class="pl-4">
                              <span class="anchor" id="sec3a"></span>
                              <h6>Three A</h6>
                              <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland.</p>
                              <br />
                              
                              <span class="anchor" id="sec3b"></span>
                              <h6>Three B</h6>
                              <p>Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland. 
                              PBR narwhal sustainable mixtape swag wolf squid tote bag. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. </p>
                          </div>
                          
                          <hr />
                          
                          <span class="anchor" id="sec4"></span>
                          <h5>4</h5>
                          <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                              slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                          
                          <span class="anchor" id="sec5"></span>
                          <h5>5</h5>
                          <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                              slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                              
                          <span class="anchor" id="sec6"></span>
                          <h5>6</h5>
                          <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                              slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                      </div>
                      <div class="tab-pane" id="tab2" role="tabpanel">
                          <div class="card card-outline-primary mb-3">
                              <div class="card-block">
                                  <h3 class="card-title">Primary</h3>
                                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" class="btn btn-outline-secondary">Outline</a>
                              </div>
                          </div>
                          <div class="card card-outline-primary mb-3">
                              <div class="card-block">
                                  <h3 class="card-title">Primary</h3>
                                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" class="btn btn-outline-secondary">Outline</a>
                              </div>
                          </div>
                          <div class="card card-outline-primary mb-3">
                              <div class="card-block">
                                  <h3 class="card-title">Primary</h3>
                                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" class="btn btn-outline-secondary">Outline</a>
                              </div>
                          </div>
                          <div class="card card-outline-primary mb-3">
                              <div class="card-block">
                                  <h3 class="card-title">Primary</h3>
                                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" class="btn btn-outline-secondary">Outline</a>
                              </div>
                          </div>
                          <div class="card card-outline-primary mb-3">
                              <div class="card-block">
                                  <h3 class="card-title">Primary</h3>
                                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" class="btn btn-outline-secondary">Outline</a>
                              </div>
                          </div>
                          <div class="card card-outline-primary mb-3">
                              <div class="card-block">
                                  <h3 class="card-title">Primary</h3>
                                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" class="btn btn-outline-secondary">Outline</a>
                              </div>
                          </div>
                          <div class="card card-outline-primary mb-3">
                              <div class="card-block">
                                  <h3 class="card-title">Primary</h3>
                                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" class="btn btn-outline-secondary">Outline</a>
                              </div>
                          </div>
                      </div>
                      <div class="tab-pane" id="tab3" role="tabpanel">
                          <h4>More content...</h4>
                          <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                              slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
                              Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>

                          <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote
                              bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics
                              ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>

                          <p>Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy
                              messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                              lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>

                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-12">
                  <div class="card bg-faded border-0 mb-3">
                      <div class="card-body">
                          <h3 class="card-title">Card</h3>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <a href="#" class="btn btn-outline-secondary">Outline</a>
                      </div>
                  </div>
                  <div class="card bg-faded border-0 mb-3">
                      <div class="card-body">
                          <h3 class="card-title">Ad</h3>
                          <p class="card-text">Display supporters and advertisements here.</p>
                          <a href="#" class="btn btn-outline-secondary">C-T-A</a>
                      </div>
                  </div>
                  <div class="card bg-faded border-0 mb-3">
                      <div class="card-body">
                          <h3 class="card-title">Card</h3>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <a href="#" class="btn btn-outline-secondary">Outline</a>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  </div>
</div>
<footer class="bg-dark text-white py-4">
  <div class="container">
      <div class="row">
          <div class="col-md-3 col-sm-6 pl-0">
              <ul class="nav flex-column">
                  <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Team</a></li>
              </ul>
          </div>
          <div class="col-md-3 col-sm-6 pl-0">
              <ul class="nav flex-column">
                  <li class="nav-item"><a href="#" class="nav-link">More</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Support</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Legal</a></li>
              </ul>
          </div>
          <div class="col-md-4 ml-auto text-right">
              <small class="text-uppercase">Connect on social media</small>
              <ul class="nav justify-content-end">
                  <li class="nav-item"><a href="#" class="nav-link pr-0"><i class="fa fa-pinterest fa-lg"></i></a></li>
                  <li class="nav-item"><a href="#" class="nav-link pr-0"><i class="fa fa-twitter fa-lg"></i></a></li>
                  <li class="nav-item"><a href="#" class="nav-link pr-0"><i class="fa fa-instagram fa-lg"></i></a></li>
                  <li class="nav-item"><a href="#" class="nav-link pr-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                  <li class="nav-item"><a href="#" class="nav-link pr-0"><i class="fa fa-skype fa-lg"></i></a></li>
              </ul>
          </div>
          <div class="col-12 text-right small">
              @2017 Company Name
          </div>
      </div>
  </div>
</footer>

<div id="modal1" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
      <div class="modal-content">
          <div class="modal-header">
              <h3 id="myModalLabel">Hello.</h3>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          </div>
          <div class="modal-body">

              <div class="form-group row">
                  <label for="example-text-input" class="col-2 col-form-label">Text</label>
                  <div class="col-10">
                      <input class="form-control" type="text" value="Mike McDonald" id="example-text-input" />
                  </div>
              </div>
              <div class="form-group row">
                  <label for="example-search-input" class="col-2 col-form-label">Search</label>
                  <div class="col-10">
                      <input class="form-control" type="search" value="How to responsive design" id="example-search-input" />
                  </div>
              </div>
              <div class="form-group row">
                  <label for="example-email-input" class="col-2 col-form-label">Email</label>
                  <div class="col-10">
                      <input class="form-control" type="email" value="email@example.com" id="example-email-input" />
                  </div>
              </div>
              <div class="form-group row">
                  <label for="example-url-input" class="col-2 col-form-label">URL</label>
                  <div class="col-10">
                      <input class="form-control" type="url" value="http://codeply.com" id="example-url-input" />
                  </div>
              </div>
              <div class="form-group row">
                  <label for="example-tel-input" class="col-2 col-form-label">Phone</label>
                  <div class="col-10">
                      <input class="form-control" type="tel" value="1-(202)-555-5555" id="example-tel-input" />
                  </div>
              </div>
          </div>
          <div class="modal-footer">
              <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
              <button class="btn btn-primary">Save changes</button>
          </div>
      </div>
  </div>
</div>
</div>
);

export default PageNav;