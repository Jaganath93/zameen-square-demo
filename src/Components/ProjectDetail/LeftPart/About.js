


export const About = ()=>{
    const propData = [
    {
        img:'https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg',
        name:'Build-Up Area',
        status:'1190 Sqft'
    },

    {
        img:'https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg',
        name:'Bedrooms',
        status:'2 Beds'
    },

    {
        img:'https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg',
        name:'Bathrooms',
        status:'2 Baths'
    },

    {
        img:'https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg',
        name:'Furnishing Status',
        status:'Furnished'
    },

    {
        img:'https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg',
        name:'Floor',
        status:'1 Of 6 Floors'
    },

    {
        img:'https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg',
        name:'Facing',
        status:'West'
    },

    {
        img:'https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg',
        name:'Status',
        status:'Ready to Move'
    }

]

    
    return(
        <div className="container-fluid bg-white mt-3 rounded shadow">
            <h6 className="pt-3">About the Property</h6>

            <div className="d-flex justify-content-between flex-wrap my-4">

            <div className="row">
                {propData?.map((data)=>(
                    
                    <div className="d-flex m-3 col-3">
                    <img src={data.img} alt={data.name}/>
                    <div className="d-flex flex-column">
                        <span className="text-muted fw-light about-prop pt-2">{data.name}</span>
                        <span className="text-primary about-prop-status fw-bold">{data.status}</span>
                    </div>
                </div>
                
                ))}
                </div>
            </div>

            <div className="d-none d-md-block">
                <h6>What does the property comprise of?</h6>
                <p className="text-muted fw-light">Lorem ipsum dolor sit amet consectetur. Mi massa faucibus ornare fames. A imperdiet enim euismod felis quis posuere tellus magna consequat. Imperdiet nunc convallis natoque elementum enim adipiscing orci elementum. Aliquam viverra nullam tristique scelerisque. Neque tempor quisque amet nulla amet semper dictumst consectetur tincidunt. Nulla lorem imperdiet molestie convallis placerat laoreet condimentum.</p>
            </div>
        </div>
    );
};