

// Data that u would receive from API

const DummyApiResponse =
{
    showLightDarkMode : true,
    showTicTacToe : true,
    showAccordian:true,
    showRandomColorGenerator:true,
    showTreeView : true
}

function FeatureFlagDataServiceCall()
{
    return new Promise((resolve , reject)=>
    {
        if(DummyApiResponse)
            {
                setTimeout(resolve(DummyApiResponse),500);
            }
            else{
                reject('Some error occured.Please try again')
            }
    })
}

export default FeatureFlagDataServiceCall;