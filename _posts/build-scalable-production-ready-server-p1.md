---
title: "Build a scalable production-ready server - Part 1: Analyze the requirements"
excerpt: "Create a back-end server running on cloud-native plaform. Analyze the requirements to have big picture on what we are doing."
coverImage: "/assets/blog/analyzeee.jpg"
genre: "development"
date: "2021-04-09T23:53:05+07:00"
author:
  name: Nguyen Quoc Hung
  picture: "/assets/blog/DSC_0078.JPG"
ogImage:
  url: "/assets/blog/analyzeee.jpg"
---

Imagine to have to develop and deploy a scalable, production-ready back-end system for caculator app. Although making an caculator app is not difficult technically, as you only need to add simple functions like plus, minus, subtract, divide, square,.... However, development is not everything of a project. 

In this series, **Build a scalable production-ready server**, I will introduce you the workflow that I usually apply to a project from scratch.

## 1. What caculator app we actually have to build?

In this project, an education business A, wants to build a caculator app for their students. They want to track students' activities while doing exam, so that they can control cheating and suspicious activities from students. Another information is that this education business is currently controlling 3 primary schools in Vietnam, USA, and Singapore, about 2500 ~ 3000 students each school. 

Because of this, the app doesn't have to have much functions, as it only needs to plus, multiply, subtract, divide, square and exponentiate two numbers.

## 2. Define our technology stack for this project

During this phase, we also collect another important information is that the platform we are going to build, is an mobile application, and it must be able to store activities to a database.

After days and days thinking, we finally have to make our decision.

1. Because this is an mobile application, we will use Kotlin, as it is a cross-platform language, to develop the interface.

2. For our major part, back-end, we will use Node.js and Express to create an RESTful API which will listen for request and bounce the result back to the app.

3. To store data, we are going to use MongoDB and mongoose package to connect to our Node.js server.

4. To make a production-ready system combine with the mobile app, we will use stateless container-native model. Using Docker and Kubernetes to dockerize and deploy our app including mobile app and back-end. 

*A stateless container is a container with no database, storage in your container.*

5. Google Cloud Platform is an easy way to expose our Kubernetes deployment. We will upload our container to Google Cloud Container Registry, and connect with Google Kubernetes Engine.

## 3. New (and maybe old) requirements arise. 

While we are brushing up our tech stack before putting our hands dirty, the business reminds us 2 things: 
- There will be many users interact with the app to request in certain time. For example in the mid semester, the observer will non-stop reload the page to retreive new activities, while over 3000 to 4000 students might access the app in just 2-3 seconds.

- They want to operate, shut down, and manage the app through operating system, without any hard-coding.

**What we can learn from these?**
- Firstly, our server might boom if there are too many operations running. We need to scale this horizontally before the service is down.

- Second, our server is currently designed to run on a Kubernetes cluster. This could be very danger if there were changes happening inside our image but we can't touch. For this case, we will change to deploy our container inside a **Virtual Machine on Google Compute Engine**

## 3. Sketching your codebase

Enough with those bunch of requirements. Let's dive in and sketch our codebase with a simple function, **plus** !

![this-is-pool](/assets/blog/serverjs.png)
*The following code shows a simple and POST request for a plus b*

Sketching codebase is a good practice for developers who haven't used that language, or haven't done relevant tasks. You don't care much on file structures, packages, all you need is to run a program as fast as possible. 

The above code shows our initial Node.js and Express server, with GET request to check the availability of the server, and a POST request, to do plus manipulation.

## 4. Next up, coding time!
That's right. We know what we need to do, our direction, our starting point, our ending point, the cautions along the way, in order to make a scalable, production-ready server. 

Next, we will define our packages for running back-end server on Node.js, as well as the file structure, and finally code our functions, which we will do in our next part: **Set up and code Node.js RESTful API** 

