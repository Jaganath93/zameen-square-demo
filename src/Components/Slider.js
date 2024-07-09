

export const Slider = ()=>{
    // const slideImg = "https://s3-alpha-sig.figma.com/img/89e6/5f46/f98168e8fd72e1ff3d0a3c14c688698e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gbJO372U6qCm4iqK55uCvfRQEYuksdWKIcscjbVV0KQBD4BO8nwBLfE2PkkT1xxXQ~QM-dfT71aoPPnWjB~ncCsR01BxtReBW-hlZr2ZjDkHAMzsh-KL8-43oVN-OTCYDA-Ee8oVuxc8iTgD~1oBCZY2cc8-iGwLzcAD3dsK7t~mQr63IbxC5LCxb7XF-TpuJvfMi51ROHpBhSklbci5Kn~X6eUrOBZQcKRSq0mtYLxaNPw-FT0yizX~2WCFKUtQjBSB~Pf82pAgmfECMBM82MlyfcS-Rq6TnCoJRThk-rm5zaUytmaPrBXTWVLrqm6S2HUIsv80yan7nVwL40XGmA__";
    const slideImgs = ["https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif","https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-web(new).d119e432.gif","https://zameensquare.com/_next/static/media/Post-Property-Banner.f6ea47b2.jpg"]

    return(
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  {slideImgs?.map((slide,i)=>(
    <div className={`carousel-item ${i==0 ? "active" : ""}`} key={i}>
    <img src={slide} className="d-block w-100" alt="..."/>
  </div>
   ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

