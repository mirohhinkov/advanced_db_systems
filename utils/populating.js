const Post = require('../model/postModel');
const User = require('../model/userModel');

const populating = () => {
    /*
    const post1 = new Post({
        title: "Django 4.1 adds async handlers",
        short: "Latest version of the popular Python web framework also provides an asynchronous interface for all data access operations.",
        post: "Django 4.1, a new version of the major Python-based web framework, adds capabilities such as asynchronous handlers and an ORM interface but also makes some backward-incompatible changes.\n Unveiled August 3, Django 4.1 can be accessed from the Django project website. The new release introduces asynchronous handlers for class-based views; view subclasses now may define async HTTP method handlers, according to release notes. For asynchronous object-relational mapping, QuerySet now provides an asynchronous interface for all data access operations. The new interface allows developers to write asynchronous code without needing to write ORM operations in sync_to_async(). At this stage, underlying database operations remain synchronous.",
        imgUrl: "/img/django.png",
        imgAlt: "Python Django logo"

    })
    post1.save();

    const post3 = new Post({
        title: "JDK 19: The new features in Java 19",
        short: "September release will feature structured concurrency, virtual threads, pattern matching for switch expressions, a vector API, and a Linux/RISC-V port.",
        post: "Java Development Kit 19, a non-LTS (long-term support) release due in September, has reached the release candidate stage. Seven features target the release including structured concurrency, record patterns, a preview of a foreign function and memory API, and support for the open source Linux/RISC-V instruction set architecture (ISA).\nWith the feature set for JDK 19 now frozen, other planned capabilities such as universal generics and value objects will have to wait for a later version of the platform. JDK 19 follows the March 22 arrival of JDK 18. Standard Java is on a six-month release cadence.\nJDK 19 is slated to be officially released for production use on September 20. An initial release candidate was published August 11, preceded by two rampdown phases in June and July. A second release candidate is due August 25. Early access builds of JDK 19 can be downloaded from jdk.java.net/19.",
        imgUrl: "/img/java.png",
        imgAlt: "Java logo"

    })
    post3.save();

    const post2 = new Post({
        title: "Ecma unveils more permissive JavaScript license",
        short: "Proposed by Mozilla, the alternative license for the JavaScript specification allows for forks, aligning with the W3C software license covering HTML and CSS.",
        post: "Ecma International, which oversees the ECMAScript standard for JavaScript, has introduced an alternative license for JavaScript that is intended to be more permissive regarding derivative works, Mozilla said this week.\nWith the move, Ecma now provides two licenses, either of which can be adopted depending on the needs of a given technical committee, Mozilla said.Whereas ECMAScript is licensed by Ecma, other web technologies such as CSS and HTML are licensed more permissively by the World Wide Web Consortium(W3C).The different licenses create overhead for legal review, Mozilla said, which can impact contributions.\nThe new Ecma license seeks to align with the work of the W3C.Its text is largely based on the W3C Document and Software License, providing a legal framework and guarantee that the development of internet infrastructure can continue independent of any organization, Mozilla said.Ecma’s default license contains some restrictions against creating derivative work, unlike W3C.While Ecma’s default license provisions have not been a problem in practice, they do not reflect how open source should work, particularly for something as foundational as JavaScript, Mozilla argued.\nThe default Ecma license offers a definitive document and location for work on a given standard, with the intention of preventing forking. “Mozilla wants to make it easy for everyone to participate in evolving the web, so we took the initiative of introducing an alternative license for Ecma International specifications.” The latest version of the ECMAScript standard, ECMAScript 2022, was approved by ECMA last week.",
        imgUrl: "/img/JavaScript_logo.png",
        imgAlt: "JavaScript logo"

    })
    post2.save();
    */

    const user1 = new User({
        userName: "Ivan Ivanov",
        email: "ivan@test.com",
        password: "12345",
    });

    const user2 = new User({
        userName: "Miroslav Hinkov",
        email: "miro@abv.bg",
        password: "12345",
    });

    const user3 = new User({
        userName: "Petar Todorov",
        email: "petar@test.com",
        password: "12345",
    });
    console.log('populating...')

    user1.save();
    user2.save();
    user3.save();


}

module.exports = populating;