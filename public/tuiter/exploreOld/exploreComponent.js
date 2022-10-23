import PostSummaryList from "../postSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="row" style="padding: 10px">
                    <div class="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search Tuiter">
                    </div>
                    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 align-self-center">
                        <i class="fa fa-gear fa-2x wd-settings-icon"></i>
                    </div>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs wd-top-spacing">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           
           <img src="../../images/spaceX.jpeg" class="card-img-top" alt="...">

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
