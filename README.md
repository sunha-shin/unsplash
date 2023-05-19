## :camera: Sunha's Personal Project - Unsplash website (Clone)
![Main picture](https://user-images.githubusercontent.com/47774611/135763661-330fe240-35d9-4ac8-b7e1-44558a22ea65.png)

The purpose of this website is for users to be able to search a catalogue of royalty-free stock photos and view them. This website is the ultimate search engine for images.

|Project URL|Project Type|Platform|Project Context|
|:---|:---|:---|:---|
|<https://sunhashin-project-unsplash.netlify.app/>|Solo project|Web|Timeline: May 2021 - Current<br>
<br>

## :wrench:Skillset
- **Front-end** React, React hooks, Redux, Redux-Saga, JavaScript(ES6+), REST APIs, JSON, CSS3, HTML5, Styled components, NPM, Yarn<br>
- **Backend** Web token<br>
- **Others**  Git/GitHub, Jira, Slack, Agile/Scrum development<br><br>

## :computer: Features
Users can do
- Search photos
- View a photo in detail
- View images related to specific topics
- Log in to my page (OAuth2.0)<br>

Here are detailed explantions:
- **Search photos**<br>
Users can see related photos when they enter a term such as 'apple'. Users can scroll through the list of photos.<br>

![Apple Search](https://user-images.githubusercontent.com/47774611/135764184-0b307dec-9f2b-4c2c-8509-339f08533fba.png)
![Apple Result](https://user-images.githubusercontent.com/47774611/135764079-cae77c79-08ab-40ca-bf3e-d7f63358eeef.png)
![Apple result2](https://user-images.githubusercontent.com/47774611/135764244-e62c78f1-9a45-4dd7-8ca0-a4a8276a5e18.png)<br><br>

- **View a photo in detail** <br>
When the user finds a desired photo they can click it and it will pop up. Then they can view more photo details. An example photo detail page is below. It includes a number of views count, downloads, published time, related photos and tags. <br>

![Apple specific click](https://user-images.githubusercontent.com/47774611/135764598-aa7e065a-4344-4391-8327-d94906a1395c.png)
![Apple result detail](https://user-images.githubusercontent.com/47774611/135764458-40464d8e-19cc-414c-aa68-6b136cc76498.png)<br><br>

- **View images related to specific topics** <br>
If users click one of the topics under the search bar, then they will see topic-related photos.

![Topic detail](https://user-images.githubusercontent.com/47774611/135764821-da1c1a8e-81f6-4b38-9d17-bab3a05b0815.png)
![Topic detail dtail](https://user-images.githubusercontent.com/47774611/135764882-c8b8c7c5-e73c-43bf-8bb6-86e45cd5ed15.png)<br><br>

- **Log in to my page (Oauth2.0)** <br>

If the user clicks 'Login' button on the top right of the main page, then the actual Unsplash' login page pops up. <br>

![Oauth login top](https://user-images.githubusercontent.com/47774611/135764981-8760486b-23a6-461f-b407-62bf62b5c29f.png)

The user can enter the Unsplash email address and password, <br>

![Oauth login](https://user-images.githubusercontent.com/47774611/135765079-deb06c8e-735d-4569-bc02-967ef44b8f87.png)

then the user can log in to my project site. <br>

![Oauth login success](https://user-images.githubusercontent.com/47774611/135765152-0979e7fb-b7c6-49bf-b120-032d0ec85b6f.png)<br>
<br>

## :mag: What I focused on are...
**Reusability** and **UI/Business logic decoupling.**<br>

- **Components reusability**

**1. Search box** <br>
There are two search boxes on the main page. Those are one component and I inherited different CSS props (border-radius and background colour) by using classnames library that provides us conditional class selection.

![components resuable search box](https://user-images.githubusercontent.com/47774611/135765399-727dab86-512e-4ea6-86dd-0b9902d99174.png)

**SearchBox** component has **'shape'** property. If I put **'round'** or **'square'**, it shows different search boxes.

![Seachbox top](https://user-images.githubusercontent.com/47774611/135765544-a44cc8dd-79c3-4dfe-922d-a90359675afc.png)
```
// Header/Gnb.js
<SearchBox shape={"round"}/>
```
<br>

![Searchbox bottom](https://user-images.githubusercontent.com/47774611/135765589-3cc3dc46-6912-4d99-ad7d-56c80690f024.png)
```
// Visual.js
<SearchBox shape={"square"}/>
```

I wrote code like this.
```
// SearchBox.js

function SearchBox({shape}) {  // shape props 
...
    return (
        <Container className={cn("SearchBox", shape)}>
	// classnames is a library that provides us conditional class selection.
	// The shape class works in the css section below
            <Form onSubmit={onSubmit}>
            ...
            </Form>
        </Container>
    )}
...

// css (styled component)
const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 14px;

// *** Here are how 'round' and 'squre' props works ***
  .round & {
    height: 38px;
    background: #eee;
    border-radius: 19px;
  }

  .square & {
    height: 54px;
    background: #fff;
    border-radius: 6px;
  }
`;
```
<br>

**2. Photo list - Masonry**<br> 
**'MasonryList.js'** is a component that inherited photo data as an array and displays it on the screen.

```
// MasonryList.js

const MasonryList = ({data = [], next, hasMore = true}) => {
// inherit array named as data
    const photoGroups = composePhotosGroups(data);
    // A function that measures the height of each photo and 
    // returns an array rearranged in a masonry style.
    ...
    return (      
    <Container>
      <Row>
        {
          photoGroups.map((photoGroups, groupIndex) => (
	          <Col key={groupIndex}>
	            {
	              photoGroups.map((item) => (    
		    //put photo data using map
	                  <ItemContainer key={item.id}>
	                      <PhotoItem item={item}
	                                 onClick={() => openPhotoPopup(item.id)}/>
	                  </ItemContainer>
	                ))}
	            </Col>
          ))}
      </Row>
    </Container>
)}
```

I imported this component to four pages and it looks like this :

![mansonry list](https://user-images.githubusercontent.com/47774611/135766008-34ca6380-247f-4782-90b2-310c0d2af3a5.png)


- **UI/business logic decoupling**<br>
I divided folders in src by function, and what I made much of the time is the **views** folder. I organized the views into three folders; components, containers and pages.<br>
![ui decouples](https://user-images.githubusercontent.com/47774611/135766138-4bbf34ad-cc46-4200-959c-78660c3a6067.png)<br>

  * **components**: This is a folder to save components. Those components can be used globally or on specific pages such as Home.js, Search.js and etc.
  * **containers**: The containers folder is a file that gets data by making asynchronous calls. Container.js files inherit these data to certain components.
  * **pages**: The pages folder is for page files. Each page file calls one or more container files.<br>  
![views pages](https://user-images.githubusercontent.com/47774611/135766468-a963c1c6-e3ab-4301-b2b6-7b5f5fd8a5ff.png)

Here is how I imported containers to Home.js page file.
```
// views/containers/MainListContainer.js

const MainListContainer = () => {
// ... here are asyncronous calls logic
return (
  <Container>
    <ContentContainer>
      <MasonryList data={list} next={next} />
    </ContentContainer>
  </Container>
)}
```
```
// views/pages/Home.js

function Home() {    
 
return (
	<Container>
	    <Visual/>
	    <MainListContainer/>
	// import the container
	</Container>
  )
}
```




<!-- ## Overview
The website generates 17 billion+ photos, allowing users to search royalty-free or stock images
(https://drive.google.com/uc?id=16LCWFkBTlvX1MOGbRkQ8TRXGbFji0jWk)](https://sunhashin-project-unsplash.netlify.app/)
Portfolio : <https://bit.ly/sunhashin-portfolio-unsplash> :point_left: (Click to see the project at a glance!)
## User story
1. Photo Search : As a user who wants to find photos, I want to be able to search royalty free or stocks images so that I can view A list of photos.
2. View photo detail<br>
  2-1. When I click a specific photo, I see detailed information of photos such as created date, number of downloads and view count.<br>
  2-2. I also see related photos, photo collections and related tags<br>
3. View topic related photo : I see related photos when I click topics under the search bar
4. Login : If I have an actual Unsplash id and password, I login this site with no sign-up

## Features
* Designed an intuitive folder structure that decouples business logic from UI
* Fetched Unsplash API by dispatching Actions and saved data to a Redux store
* Created multiple generators in Redux-Saga to make handling asynchronous calls for getting photos when users search them
* Implemented OAuth 2.0 authorization to increase login accessibility of Unsplash’s actual users
* Created infinite scroll using custom hooks to boost user experience and engagement

## Used technologies
- React
- Redux
- Redux-Saga
- REST APIs / JSON
- Asynchronous calls
- JavaScript (ES6+)
- Styled components / SCSS
- HTML5 / CSS3
- Libraries : react-router-dom, axios, classnames, history, lodash, moment, qs, react-hook-from, etc.
 -->
