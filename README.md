# Guidr API

## Base URL: https://lambda-guidr.herokuapp.com/api

---



## AUTH ## Endpoints that return a token

### POST /auth/register

    -input:
        -username           -Required     -string
        -password           -Required     -string

    -returns 
        { 
        id: 1, 
        username: "test", 
        token: "generatedToken" 
        }    


### POST /auth/login

    -input:
        -username           -Required     -string
        -password           -Required     -string

    -returns 
        { 
        id: 1,
        username: "test", 
        token: "generatedToken" 
        }


### PUT /auth/update

    for user profile update or creating user profile after registration
    will return a newly generated token 
    **remember to update authorization in headers**

    -input:
        -username: "test",  -Required   -string
        -name: "new name",              -string                
        -age: 23,                       -integer
        -title: "new title",            -string
        -tagline: "new tagline",        -string
        -yearsAsGuide: 3,               -integer
        -profilePic: "http://imgurl",   -string
        -coverPic: "http://imgurl"     -string

    -returns
        { 
        id: 1, 
        username: "test",         
        name: "new name",                         
        age: 23,                       
        title: "new title",            
        tagline: "new tagline",        
        yearsAsGuide: 3,              
        profilePic: "http://imgurl", 
        coverPic: "http://imgurl",
        token: "newlyGeneratedToken"  
        }    




## Endpoints ##

### GET /api/user/

    -return logged in user


### POST /trip

    -create new trip

    -input:
        -user_id: 1             -Required       -integer
        -title: "trip title"    -Required       -string
        -shortDescription: "short description"  -string
        -description: "trip long description"   -text
        -isProfessional: false                  -boolean (false by default)
        -type: 1                -Required       -integer 
        -duration: 3            -Required       -integer
        -distance: 500                          -integer
        -date: "2018-11-01"     -Required       -string
        -image: "http://imageURL"               -string

    -returns
    {
        id: 4,
        user_id: 1,
        title: "trip title",
        shortDescription: "short description",
        description: "trip long description",
        isProfessional: 0,
        type: 1,
        duration: 3,
        distance: 500,
        date: "2018-11-01",
        image: "http://imgURL
    }


### PUT /trip/:id

    -update trip by id, will only allow updating user's own trip

    -input: 
        -user_id: 1             -Required       -integer
        -title: "new trip title"    -Required       -string
        -shortDescription: "new short description"  -string
        -description: "trip long description"   -text
        -isProfessional: true                  -boolean (false by default)
        -type: 1                -Required       -integer 
        -duration: 6            -Required       -integer
        -distance: 300                          -integer
        -date: "2018-5-12"     -Required       -string
        -image: "http://new-imageURL"            -string

    -returns: 
    {
        id: 4,
        user_id: 1,
        title: "new trip title",
        shortDescription: "new short description,
        description: "trip long description,
        isProfessional: 1,
        type: 1,
        duration: 6,
        distance: 300,
        date: "2018-5-12",
        image: "http://new-imageURL"   
}


### GET /trip/:id

    -get trip by trip id, will only return uesr's own trip


### DELETE /trip/:id

    -delete trip by trip id, will only allow deleting user's own trip


### GET /trip/list/types

    -get a list of all available trip types    (no authorization required)


### GET /user/trips

    -get user's trips, return id, title, shortDescription and image
    -currently also returning a sumDuration object, please ignore it as it's only for stretch, and I want to flush it out more and add more return data to the object.
    
    