import Frontend from './assets/Frontend.webp'
import Computer_Science from './assets/Computer_Science.webp'
import Android from './assets/Android.webp'
import Backend from './assets/Backend.webp'
import DevOps from './assets/DevOps.webp'

const roadmaps = [
    {
        id: 1,
        cat: {
            ico: Frontend,
            title: "Frontend"
        },
        user: "Bozhovskiy",
        average_rating: 4.8,
        title: "Frontend For Beginners",
        difficulty: "Easy",
        estimated_hours: 40,
        description: "Step by step guide to becoming a modern frontend developer in 2024",
        blocks: [
            {
                "title": "Internet",
                "description": "The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols. Visit the following resources to learn more:",
                "components": [
                    {
                        "title": "How does the internet work?",
                        "description": "The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.",
                        "id": "yCnn-NfSxIybUQ2iTuUGq",
                        "resources": [{
                            link: "https://roadmap.sh/guides/what-is-internet",
                            title: "Introduction to Internet"
                        },
                            {
                                link: "https://cs.fyi/guide/how-does-internet-work",
                                title: "How does the Internet Work?"
                            },
                            {
                                link: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
                                title: "How Does the Internet Work? MDN Docs"
                            },
                        ]
                    },
                    {
                        "title": "What is HTTP?",
                        "description": "HTTP is the TCP/IP based application layer communication protocol which standardizes how the client and server communicate with each other. HTTP follows a classical “Client-Server model” with a client opening a connection request, then waiting until it receives a response. HTTP is a stateless protocol, that means that the server does not keep any data (state) between two requests.",
                        "id": "R12sArWVpbIs_PHxBqVaR",
                        "resources": [
                            {
                                title: "Everything you need to know about HTTP",
                                link: "https://cs.fyi/guide/http-in-depth"
                            },
                            {
                                title: "What is HTTP?",
                                link: "https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/"
                            },
                            {
                                title: "HTTP Crash Course & Exploration",
                                link: "https://www.youtube.com/watch?v=iYM2zFP3Zn0"
                            }
                        ]
                    },
                    {
                        "title": "What is Domain Name?",
                        "description": "A domain name is a unique, easy-to-remember address used to access websites, such as ‘google.com’, and ‘facebook.com’. Users can connect to websites using domain names thanks to the Domain Name System (DNS).",
                        "id": "ZhSuu2VArnzPDp6dPQQSC",
                        "resources": [{
                            title: "What is a Domain Name?",
                            link: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name"
                        },
                            {
                                title: "A Beginners Guide to How Domain Names Work",
                                link: "https://www.youtube.com/watch?v=Y4cRx19nhJk"
                            },
                        ]
                    },
                    {
                        "title": "What is hosting?",
                        "description": "Web hosting is an online service that allows you to publish your website files onto the internet. So, anyone who has access to the internet has access to your website.",
                        "id": "aqMaEY8gkKMikiqleV5EP",
                        "resources": [
                            {
                                title: "Web Hosting Explained for Beginners",
                                link: "https://www.hostinger.com/tutorials/what-is-web-hosting/"
                            },
                            {
                                title: "Different Types of Web Hosting Explained",
                                link: "https://www.youtube.com/watch?v=AXVZYzw8geg"
                            },
                        ]
                    },
                    {
                        "title": "DNS and how it works?",
                        "description": "The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.",
                        "id": "hkxw9jPGYphmjhTjw8766",
                        "resources": [
                            {
                                title: "What is DNS?",
                                link: "https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/"
                            },
                            {
                                title: "DNS and How does it Work?",
                                link: "https://www.youtube.com/watch?v=Wj0od2ag5sk"
                            }, {
                                link: "https://app.daily.dev/tags/dns?ref=roadmapsh",
                                title: "Explore top posts about DNS"
                            }]
                    },
                    {
                        "title": "Browsers and how they work?",
                        "description": "A web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface.",
                        "id": "P82WFaTPgQEPNp5IIuZ1Y",
                        "resources": [
                            {
                                title: "How Do Web Browsers Work?",
                                link: "https://www.youtube.com/watch?v=WjDrMKZWCt0"
                            },
                            {
                                title: "Role of Rendering Engine in Browsers",
                                link: "https://www.browserstack.com/guide/browser-rendering-engine"
                            },
                        ]
                    }
                ]
            },
            {
                "title": "HTML",
                "description": "HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.",
                "components": [
                    {
                        "title": "Learn the basics",
                        "description": "HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.",
                        "id": "PCirR2QiFYO89Fm-Ev3o1",
                        "resources": [
                            {
                                title: "W3Schools: Learn HTML",
                                link: "https://www.w3schools.com/html/html_intro.asp"
                            },
                            {
                                title: "HTML Full Course - Build a Website Tutorial",
                                link: "https://www.youtube.com/watch?v=pQN-pnXPaVg"
                            },]
                    },
                    {
                        "title": "Writing Semantic HTML",
                        "description": "Semantic element clearly describes its meaning to both the browser and the developer. In HTML, semantic element are the type of elements that can be used to define different parts of a web page such as <form>, <table>, <article>, <header>, <footer>, etc.",
                        "id": "z8-556o-PaHXjlytrawaF",
                        "resources": [
                            {
                                title: "Guide to Writing Semantic HTML",
                                link: "https://cs.fyi/guide/writing-semantic-html"
                            },
                            {
                                title: "Semantic HTML - web.dev",
                                link: "https://web.dev/learn/html/semantic-html/"
                            },]
                    },
                    {
                        "title": "Forms and Validations",
                        "description": "Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format. This is called client-side form validation, and helps ensure data submitted matches the requirements set forth in the various form controls.",
                        "id": "V5zucKEHnIPPjwHqsMPHF",
                        "resources": [
                            {
                                title: "MDN Web Docs: Client-side form validation",
                                link: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
                            },
                            {
                                title: "W3Schools: JavaScript Form Validation",
                                link: "https://www.w3schools.com/js/js_validation.asp"
                            },]
                    },
                    {
                        "title": "Accessibility",
                        "description": "Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.",
                        "id": "iJIqi7ngpGHWAqtgdjgxB",
                        "resources": [
                            {
                                title: "Developing for Web Accessibility by W3C WAI",
                                link: "https://www.w3.org/WAI/tips/developing/"
                            },
                            {
                                title: "Complete Playlist on Accessibility",
                                link: "https://youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"
                            },]
                    },
                    {
                        "title": "SEO Basics",
                        "description": "SEO or Search Engine Optimization is the technique used to optimize your website for better rankings on search engines such as Google, Bing etc.",
                        "id": "mH_qff8R7R6eLQ1tPHLgG",
                        "resources": [
                            {
                                title: "Google Search Central — SEO Docs",
                                link: "https://developers.google.com/search/docs"
                            },
                            {
                                title: "Complete SEO Course for Beginners",
                                link: "https://www.youtube.com/watch?v=xsVTqzratPs"
                            },]
                    }
                ]
            },
            {
                "title": "CSS",
                "description": "CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
                "components": [
                    {
                        "title": "Learn the basics",
                        "description": "CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
                        "id": "YFjzPKWDwzrgk2HUX952L",
                        "resources": [
                            {
                                title: "W3Schools — Learn CSS",
                                link: "https://www.w3schools.com/css/"
                            },
                            {
                                title: "CSS Crash Course For Absolute Beginners",
                                link: "https://www.youtube.com/watch?v=yfoY53QXEnI"
                            },]
                    },
                    {
                        "title": "Making Layouts",
                        "description": "Float, grid, flexbox, positioning, display and box model are some of the key topics that are used for making layouts. Use the resources below to learn about these topics:",
                        "id": "dXeYVMXv-3MRQ1ovOUuJW",
                        "resources": [
                            {
                                title: "Game for learning CSS Grid",
                                link: "https://cssgridgarden.com/"
                            },
                            {
                                title: "All about Floats",
                                link: "https://css-tricks.com/all-about-floats/"
                            },
                            {
                                title: "Positioning Types: How Do They Differ?",
                                link: "https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/"
                            },
                            {
                                title: "Get on the Grid at Last with the CSS Grid Layout Module",
                                link: "https://thenewstack.io/get-grid-last-css-grid-template-markup/"
                            },]
                    },
                    {
                        "title": "Responsive Design",
                        "description": "Responsive Web Designing is the technique to make your webpages look good on all screen sizes. There are certain techniques used to achieve that e.g. CSS media queries, percentage widths, min or max widths heights etc.",
                        "id": "TKtWmArHn7elXRJdG6lDQ",
                        "resources": [
                            {
                                title: "Responsive Web Design",
                                link: "https://www.w3schools.com/css/css_rwd_intro.asp"
                            },
                            {
                                title: "5 simple tips to making responsive layouts the easy way",
                                link: "https://www.youtube.com/watch?v=VQraviuwbzU"
                            },
                            {
                                title: "Introduction To Responsive Web Design",
                                link: "https://www.youtube.com/watch?v=srvUrASNj0s"
                            },]
                    }
                ]
            },
            {
                "title": "JavaScript",
                "description": "JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.",
                "components": [
                    {
                        "title": "Fetch API / Ajax (XHR)",
                        "description": "Ajax is the technique that lets us send and receive the data asynchronously from the servers e.g. updating the user profile or asynchronously fetching the list of searched products without reloading the page.",
                        "id": "A4brX0efjZ0FFPTB4r6U0",
                        "resources": [
                            {
                                title: "Fetch API MDN Docs",
                                link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
                            },
                            {
                                title: "JavaScript Fetch API",
                                link: "https://www.youtube.com/watch?v=-ZI0ea5O2oA"
                            },]
                    },
                    {
                        "title": "Learn DOM Manipulation",
                        "description": "The Document Object Model (DOM) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style. With DOM, we can easily access and manipulate tags, IDs, classes, attributes, etc.",
                        "id": "0MAogsAID9R04R5TTO2Qa",
                        "resources": [
                            {
                                title: "JavaScript HTML DOM",
                                link: "https://www.w3schools.com/js/js_htmldom.asp"
                            },
                            {
                                title: "What is DOM, Shadow DOM and Virtual DOM?",
                                link: "https://www.youtube.com/watch?v=7Tok22qxPzQ"
                            },]
                    },
                    {
                        "title": "Learn the Basics",
                        "description": "Description",
                        "id": "wQSjQqwKHfn5RGPk34BWI",
                        "resources": [
                            {
                                title: "W3Schools – JavaScript Tutorial",
                                link: "https://www.w3schools.com/js/"
                            },
                            {
                                title: "JavaScript Crash Course for Beginners",
                                link: "https://youtu.be/hdI2bqOjy3c?t=2"
                            },]
                    }
                ]
            },
            {
                "title": "Version Control Systems",
                "description": "Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code – if you’ve ever collaborated with other people on a project, you might already know the frustration of copying and merging the changes from someone else into your codebase; version control systems allow you to get rid of this issue.",
                "components": [
                    {
                        "title": "Git",
                        "description": "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
                        "id": "R_I4SGYqLk5zze5I1zS_E",
                        "resources": [
                            {
                                title: "Tutorial: Git for Absolutely Everyone",
                                link: "https://thenewstack.io/tutorial-git-for-absolutely-everyone/"
                            },
                            {
                                title: "Git & GitHub Crash Course For Beginners",
                                link: "https://www.youtube.com/watch?v=SWYqp7iY_Tc"
                            },]
                    }
                ]
            },
            {
                "title": "Package Managers",
                "description": "Package managers allow you to manage the dependencies (external code written by you or someone else) that your project needs to work correctly.",
                "components": [
                    {
                        "title": "yarn",
                        "description": "Yarn is a software packaging system developed in 2016 by Facebook for Node.js JavaScript runtime environment that provides speed, consistency, stability, and security as an alternative to npm (package manager).",
                        "id": "yrq3nOwFREzl-9EKnpU-e",
                        "resources": [
                            {
                                title: "Yarn Crash Course",
                                link: "https://www.youtube.com/watch?v=g9_6KmiBISk"
                            },]
                    },
                    {
                        "title": "pnpm",
                        "description": "PNPM is an alternative package manager for Node. js which stands for “Performant NPM”. The main purpose of PNPM is to hold all the packages at a global (centralized) store and use them if needed by other projects too by creating hard links to it.",
                        "id": "SLxA5qJFp_28TRzr1BjxZ",
                        "resources": [
                            {
                                title: "Official Website",
                                link: "https://pnpm.io/"
                            }]
                    },
                    {
                        "title": "npm",
                        "description": "npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.",
                        "id": "ib_FHinhrw8VuSet-xMF7",
                        "resources": [
                            {
                                title: "How to NPM",
                                link: "https://github.com/workshopper/how-to-npm"
                            },
                            {
                                title: "NPM tutorial for Beginners",
                                link: "https://www.youtube.com/watch?v=2V1UUhBJ62Y"
                            },]
                    }
                ]
            },
            {
                "title": "Pick a Framework",
                "description": "Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website. Frameworks for web application development are collections of various tools. Frameworks vary in their capabilities and functions, depending on the tasks set. They define the structure, establish the rules, and provide the development tools required.",
                "components": [
                    {
                        "title": "Angular",
                        "description": "Angular is a component based front-end development framework built on TypeScript which includes a collection of well-integrated libraries that include features like routing, forms management, client-server communication, and more.",
                        "id": "-bHFIiXnoUQSov64WI9yo",
                        "resources": [
                            {
                                title: "Visit Dedicated Angular Roadmap",
                                link: "https://roadmap.sh/angular"
                            }]
                    },
                    {
                        "title": "Vue.js",
                        "description": "Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. It is mainly focused on front end development.",
                        "id": "ERAdwL1G9M1bnx-fOm5ZA",
                        "resources": [
                            {
                                title: "Visit Dedicated Vue Roadmap",
                                link: "https://roadmap.sh/vue"
                            }]
                    },
                    {
                        "title": "React",
                        "description": "React is the most popular front-end JavaScript library for building user interfaces. React can also render on the server using Node and power mobile apps using React Native.",
                        "id": "tG5v3O4lNIFc2uCnacPak",
                        "resources": [
                            {
                                title: "Visit Dedicated React Roadmap",
                                link: "https://roadmap.sh/react"
                            }]
                    },
                ]
            },
            {
                "title": "Writing CSS",
                "description": "The way we write CSS in our modern front-end applications is completely different from how we used to write CSS before. There are methods such as Styled Components, CSS Modules, Styled JSX, Emotion, etc",
                "components": [
                    {
                        "title": "Tailwind",
                        "description": "CSS Framework that provides atomic CSS classes to help you style components e.g. flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
                        "id": "eghnfG4p7i-EDWfp3CQXC",
                        "resources": [
                            {
                                title: "Tailwind Website",
                                link: "https://tailwindcss.com/"
                            },
                            {
                                title: "Tailwind CSS Full Course for Beginners",
                                link: "https://www.youtube.com/watch?v=lCxcTsOHrjo"
                            },]
                    }
                ]
            },
            {
                "title": "CSS Preprocessors",
                "description": "CSS Preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.",
                "components": [
                    {
                        "title": "Sass",
                        "description": "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. It lets you write maintainable CSS and provides features like variable, nesting, mixins, extension, functions, loops, conditionals and so on.",
                        "id": "kukEE5rMSPa4NeNjx21kt",
                        "resources": [
                            {
                                title: "Sass Website",
                                link: "https://sass-lang.com/"
                            },
                            {
                                title: "Sass Tutorial for Beginners",
                                link: "https://www.youtube.com/watch?v=_a5j7KoflTs"
                            }, {
                                title: "Sass, BEM, & Responsive Design",
                                link: "https://www.youtube.com/watch?v=jfMHA8SqUL4"
                            },]
                    },
                    {
                        "title": "PostCSS",
                        "description": "PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.",
                        "id": "9WlPENh9g1xOv-zA64Tfg",
                        "resources": [
                            {
                                title: "Official Website",
                                link: "https://postcss.org/"
                            }]
                    }
                ]
            },
        ]
    },
    {
        "id": 2,
        "cat": {
            "ico": Computer_Science,
            "title": "Data Science"
        },
        "user": "Bozhovskiy",
        "average_rating": 4.5,
        "title": "Data Science for Beginners",
        "difficulty": "Hard",
        "estimated_hours": 120,
        "description": "Step by step guide to becoming a modern data scientist in 2024",
        "blocks": [
            {
                "title": "Data Science Basics",
                "description": "Introduction to Data Science, covering data collection, cleaning, analysis, and visualization techniques.",
                "components": [
                    {
                        "title": "What is Data Science?",
                        "description": "A comprehensive overview of Data Science, its applications, and the skill set required to succeed in this field.",
                        "id": "data_science_intro",
                        "resources": [
                            {
                                "link": "https://www.datasciencecentral.com/what-is-data-science/",
                                "title": "What is Data Science?"
                            },
                            {
                                "link": "https://towardsdatascience.com/what-is-data-science-6f41b943a6be",
                                "title": "What is Data Science?"
                            }
                        ]
                    },
                    {
                        "title": "Data Collection Methods",
                        "description": "Learn about various data collection methods including surveys, web scraping, and using APIs.",
                        "id": "data_collection_methods",
                        "resources": [
                            {
                                "link": "https://www.surveyjunkie.com/",
                                "title": "Survey Methods Overview"
                            },
                            {
                                "link": "https://realpython.com/beautiful-soup-web-scraper-python/",
                                "title": "Web Scraping with Beautiful Soup"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Python for Data Science",
                "description": "Basics of Python programming for Data Science, including libraries like Pandas, NumPy, and Matplotlib.",
                "components": [
                    {
                        "title": "Learning Python Basics",
                        "description": "Understand the core syntax of Python, control flow, functions, and data structures.",
                        "id": "python_basics",
                        "resources": [
                            {
                                "link": "https://www.learnpython.org/",
                                "title": "Learn Python"
                            },
                            {
                                "link": "https://www.codecademy.com/learn/learn-python-3",
                                "title": "Codecademy: Learn Python"
                            }
                        ]
                    },
                    {
                        "title": "Data Manipulation with Pandas",
                        "description": "Utilize the Pandas library for data manipulation and analysis, including DataFrames and Series.",
                        "id": "pandas_intro",
                        "resources": [
                            {
                                "link": "https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/index.html",
                                "title": "Getting Started with Pandas"
                            },
                            {
                                "link": "https://towardsdatascience.com/pandas-tutorial-for-beginners-98e123bc2a8",
                                "title": "Pandas Tutorial for Beginners"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Data Analysis and Visualization",
                "description": "Techniques and tools for analyzing and visualizing data effectively.",
                "components": [
                    {
                        "title": "Exploratory Data Analysis (EDA)",
                        "description": "Learn how to perform EDA to summarize the main characteristics of a dataset.",
                        "id": "exploratory_data_analysis",
                        "resources": [
                            {
                                "link": "https://towardsdatascience.com/exploratory-data-analysis-eda-in-python-3d25d6e8c94",
                                "title": "Exploratory Data Analysis in Python"
                            },
                            {
                                "link": "https://www.datacamp.com/community/tutorials/exploratory-data-analysis-python",
                                "title": "EDA with Python"
                            }
                        ]
                    },
                    {
                        "title": "Data Visualization with Matplotlib",
                        "description": "Create visualizations using Matplotlib to better understand data insights.",
                        "id": "data_visualization_matplotlib",
                        "resources": [
                            {
                                "link": "https://matplotlib.org/stable/tutorials/index.html",
                                "title": "Matplotlib Tutorials"
                            },
                            {
                                "link": "https://towardsdatascience.com/data-visualization-in-python-with-matplotlib-b7b2e2f4b8d",
                                "title": "Data Visualization with Matplotlib"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Introduction to Machine Learning",
                "description": "A beginner's guide to the concepts and algorithms of machine learning.",
                "components": [
                    {
                        "title": "Basic Concepts of Machine Learning",
                        "description": "Learn about the fundamental concepts of machine learning, including supervised and unsupervised learning.",
                        "id": "ml_basic_concepts",
                        "resources": [
                            {
                                "link": "https://www.ibm.com/cloud/learn/machine-learning",
                                "title": "Introduction to Machine Learning"
                            },
                            {
                                "link": "https://towardsdatascience.com/machine-learning-for-beginners-6f4f4b22b487",
                                "title": "Machine Learning for Beginners"
                            }
                        ]
                    },
                    {
                        "title": "Machine Learning Libraries",
                        "description": "An overview of popular machine learning libraries such as Scikit-learn and TensorFlow.",
                        "id": "ml_libraries",
                        "resources": [
                            {
                                "link": "https://scikit-learn.org/stable/",
                                "title": "Scikit-learn Documentation"
                            },
                            {
                                "link": "https://www.tensorflow.org/",
                                "title": "TensorFlow Official Site"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "cat": {
            "ico": DevOps,
            "title": "Machine Learning"
        },
        "user":"Bozhovskiy",
        "average_rating": 4.9,
        "title": "Mastering Machine Learning",
        "difficulty": "Normal",
        "estimated_hours": 80,
        "description": "Step by step guide to becoming a master in machine learning in 2024",
        "blocks": [
            {
                "title": "Introduction to Machine Learning",
                "description": "Understanding the fundamentals of machine learning, types of learning, and common use cases.",
                "components": [
                    {
                        "title": "What is Machine Learning?",
                        "description": "An overview of machine learning, its types, and applications in various fields.",
                        "id": "ml_intro",
                        "resources": [
                            {
                                "link": "https://www.ibm.com/cloud/learn/machine-learning",
                                "title": "What is Machine Learning?"
                            },
                            {
                                "link": "https://towardsdatascience.com/machine-learning-for-beginners-6f4f4b22b487",
                                "title": "Machine Learning for Beginners"
                            }
                        ]
                    },
                    {
                        "title": "Supervised vs Unsupervised Learning",
                        "description": "A detailed comparison of supervised and unsupervised learning techniques.",
                        "id": "supervised_unsupervised",
                        "resources": [
                            {
                                "link": "https://towardsdatascience.com/supervised-vs-unsupervised-learning-dcb0b81e6811",
                                "title": "Supervised vs Unsupervised Learning"
                            },
                            {
                                "link": "https://www.analyticsvidhya.com/blog/2021/06/a-beginners-guide-to-supervised-and-unsupervised-learning/",
                                "title": "A Beginner's Guide to Supervised and Unsupervised Learning"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Machine Learning Algorithms",
                "description": "Key algorithms used in machine learning, their applications, and how they work.",
                "components": [
                    {
                        "title": "Linear Regression",
                        "description": "An introduction to linear regression, its formula, and practical applications.",
                        "id": "linear_regression",
                        "resources": [
                            {
                                "link": "https://towardsdatascience.com/linear-regression-in-python-2b0c4183d8c3",
                                "title": "Linear Regression in Python"
                            },
                            {
                                "link": "https://www.analyticsvidhya.com/blog/2015/06/understanding-linear-regression-in-machine-learning/",
                                "title": "Understanding Linear Regression in Machine Learning"
                            }
                        ]
                    },
                    {
                        "title": "Decision Trees",
                        "description": "Explore decision trees, how they function, and their role in classification tasks.",
                        "id": "decision_trees",
                        "resources": [
                            {
                                "link": "https://scikit-learn.org/stable/modules/tree.html",
                                "title": "Decision Trees in Scikit-Learn"
                            },
                            {
                                "link": "https://towardsdatascience.com/decision-tree-classification-in-python-9a11e1b8c5e",
                                "title": "Decision Tree Classification in Python"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Model Evaluation and Tuning",
                "description": "Techniques and metrics for evaluating machine learning models and improving their performance.",
                "components": [
                    {
                        "title": "Model Evaluation Metrics",
                        "description": "Learn about various metrics like accuracy, precision, recall, and F1-score to evaluate model performance.",
                        "id": "model_evaluation_metrics",
                        "resources": [
                            {
                                "link": "https://towardsdatascience.com/evaluation-metrics-for-classification-models-in-python-4e9e0a51c5b3",
                                "title": "Evaluation Metrics for Classification Models"
                            },
                            {
                                "link": "https://scikit-learn.org/stable/modules/model_evaluation.html",
                                "title": "Model Evaluation in Scikit-Learn"
                            }
                        ]
                    },
                    {
                        "title": "Hyperparameter Tuning",
                        "description": "Explore techniques for tuning hyperparameters to optimize model performance.",
                        "id": "hyperparameter_tuning",
                        "resources": [
                            {
                                "link": "https://towardsdatascience.com/hyperparameter-tuning-with-gridsearchcv-in-python-9a09e0e2e4ed",
                                "title": "Hyperparameter Tuning with GridSearchCV"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=0a2M0uDDGvU",
                                "title": "Hyperparameter Tuning in Machine Learning"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Deep Learning",
                "description": "Introduction to deep learning, neural networks, and their applications.",
                "components": [
                    {
                        "title": "Neural Networks Basics",
                        "description": "Understanding the structure and function of neural networks.",
                        "id": "neural_networks_basics",
                        "resources": [
                            {
                                "link": "https://www.ibm.com/cloud/learn/neural-networks",
                                "title": "What are Neural Networks?"
                            },
                            {
                                "link": "https://towardsdatascience.com/neural-networks-for-beginners-efc6f1e7e09f",
                                "title": "Neural Networks for Beginners"
                            }
                        ]
                    },
                    {
                        "title": "Popular Deep Learning Frameworks",
                        "description": "Explore popular frameworks for deep learning like TensorFlow and PyTorch.",
                        "id": "deep_learning_frameworks",
                        "resources": [
                            {
                                "link": "https://www.tensorflow.org/",
                                "title": "TensorFlow Official Site"
                            },
                            {
                                "link": "https://pytorch.org/",
                                "title": "PyTorch Official Site"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "cat": {
            "ico": Android,
            "title": "Android"
        },
        "user": "Bozhovskiy",
        "average_rating": 4.3,
        "title": "iOS and Android App Development",
        "difficulty": "Hard",
        "estimated_hours": 120,
        "description": "Step by step guide to becoming a mobile app developer in 2024",
        "blocks": [
            {
                "title": "Basics of Mobile App Development",
                "description": "Core concepts of mobile app development for Android and iOS, including development environments and architecture.",
                "components": [
                    {
                        "title": "What are Mobile Applications?",
                        "description": "An overview of mobile applications, their features, and common platforms.",
                        "id": "mobile_apps_intro",
                        "resources": [
                            {
                                "link": "https://www.ibm.com/cloud/learn/mobile-apps",
                                "title": "What are Mobile Applications?"
                            },
                            {
                                "link": "https://developer.android.com/guide/components/fundamentals",
                                "title": "Android Components Overview"
                            }
                        ]
                    },
                    {
                        "title": "Mobile App Architecture",
                        "description": "Understanding mobile app architecture, including client-server models and MVVM architecture.",
                        "id": "mobile_app_architecture",
                        "resources": [
                            {
                                "link": "https://developer.android.com/jetpack/guide",
                                "title": "Guide to Android Architecture"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=YXi69C9-u2M",
                                "title": "Understanding App Architecture"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Android App Development",
                "description": "Fundamentals of developing applications for Android using Java and Kotlin.",
                "components": [
                    {
                        "title": "Java and Kotlin for Android",
                        "description": "Programming languages used for Android development, their features, and differences.",
                        "id": "java_kotlin_android",
                        "resources": [
                            {
                                "link": "https://developer.android.com/kotlin",
                                "title": "Kotlin for Android Developers"
                            },
                            {
                                "link": "https://www.javatpoint.com/android-java-tutorial",
                                "title": "Java for Android Development"
                            }
                        ]
                    },
                    {
                        "title": "UI Components for Android",
                        "description": "Understanding UI components in Android, such as Activities, Fragments, and Views.",
                        "id": "android_ui_components",
                        "resources": [
                            {
                                "link": "https://developer.android.com/guide/topics/ui/controls/button",
                                "title": "Buttons in Android"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=h0z8rMlTLFg",
                                "title": "UI Components in Android"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Advanced Android Development",
                "description": "Exploring advanced topics in Android development, including background processes and architecture components.",
                "components": [
                    {
                        "title": "Background Processing",
                        "description": "Understanding services, WorkManager, and how to handle background tasks in Android.",
                        "id": "background_processing",
                        "resources": [
                            {
                                "link": "https://developer.android.com/guide/background",
                                "title": "Background Processing in Android"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=Zb1m0TjlvZg",
                                "title": "Android Background Services"
                            }
                        ]
                    },
                    {
                        "title": "Architecture Components",
                        "description": "Learn about Android Architecture Components such as LiveData, ViewModel, and Room for database management.",
                        "id": "architecture_components",
                        "resources": [
                            {
                                "link": "https://developer.android.com/topic/libraries/architecture",
                                "title": "Android Architecture Components"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=Z8uZ0r2g4mA",
                                "title": "Android Architecture Components Overview"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Publishing and Monetization",
                "description": "Steps to publish your Android app on Google Play Store and explore monetization strategies.",
                "components": [
                    {
                        "title": "Publishing Your Android App",
                        "description": "Guide to publishing your app on Google Play Store, including requirements and best practices.",
                        "id": "publishing_android_app",
                        "resources": [
                            {
                                "link": "https://developer.android.com/distribute/best-practices/publish",
                                "title": "Best Practices for Publishing"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=7D6fC7Fh8l0",
                                "title": "How to Publish Your Android App"
                            }
                        ]
                    },
                    {
                        "title": "Monetization Strategies",
                        "description": "Exploring different monetization strategies for Android apps, including ads, in-app purchases, and subscriptions.",
                        "id": "monetization_strategies",
                        "resources": [
                            {
                                "link": "https://developer.android.com/google-play/billing",
                                "title": "In-app Billing Overview"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=4zO1kp1t0R8",
                                "title": "Monetizing Android Apps"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "cat": {
            "ico": Backend,
            "title": "Backend"
        },
        "user":  "Bozhovskiy",
        "average_rating": 4.7,
        "title": "Cloud Infrastructure and DevOps",
        "difficulty": "Easy",
        "estimated_hours": 40,
        "description": "Step by step guide to becoming proficient in cloud infrastructure and DevOps practices.",
        "blocks": [
            {
                "title": "Introduction to Cloud Computing",
                "description": "Understanding the fundamentals of cloud computing, including service models and deployment methods.",
                "components": [
                    {
                        "title": "What is Cloud Computing?",
                        "description": "Overview of cloud computing, its benefits, and different service models like IaaS, PaaS, and SaaS.",
                        "id": "cloud_computing_intro",
                        "resources": [
                            {
                                "link": "https://aws.amazon.com/what-is-cloud-computing/",
                                "title": "What is Cloud Computing?"
                            },
                            {
                                "link": "https://azure.microsoft.com/en-us/overview/what-is-cloud-computing/",
                                "title": "Azure Overview of Cloud Computing"
                            }
                        ]
                    },
                    {
                        "title": "Cloud Deployment Models",
                        "description": "Explore the different cloud deployment models, including public, private, and hybrid clouds.",
                        "id": "cloud_deployment_models",
                        "resources": [
                            {
                                "link": "https://www.ibm.com/cloud/learn/cloud-deployment-models",
                                "title": "Cloud Deployment Models Explained"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=kO2iXod26dk",
                                "title": "Cloud Deployment Models Overview"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "DevOps Practices",
                "description": "Introduction to DevOps, its practices, and how it improves collaboration and productivity in software development.",
                "components": [
                    {
                        "title": "What is DevOps?",
                        "description": "An overview of DevOps culture, practices, and tools that support continuous integration and delivery.",
                        "id": "devops_intro",
                        "resources": [
                            {
                                "link": "https://www.atlassian.com/devops/what-is-devops",
                                "title": "What is DevOps?"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=2JfR2H2C8xQ",
                                "title": "DevOps Explained"
                            }
                        ]
                    },
                    {
                        "title": "CI/CD Pipelines",
                        "description": "Understanding Continuous Integration and Continuous Deployment, their benefits, and tools used.",
                        "id": "ci_cd_pipelines",
                        "resources": [
                            {
                                "link": "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
                                "title": "What is CI/CD?"
                            },
                            {
                                "link": "https://www.youtube.com/watch?v=4K2ex7p9WhM",
                                "title": "CI/CD Pipeline Explained"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "iOS and Android App Development",
                "description": "Step by step guide to becoming a mobile app developer in 2024",
                "components": [
                    {
                        "id": "mobile_01",
                        "title": "What are Mobile Applications?",
                        "description": "An overview of mobile applications, their features, and common platforms.",
                        "resources": [
                            {
                                "link": "https://www.ibm.com/cloud/learn/mobile-apps",
                                "title": "What are Mobile Applications?"
                            }
                        ]
                    },
                    {
                        "id": "mobile_02",
                        "title": "Development Tools",
                        "description": "Explore the tools and software commonly used in mobile app development.",
                        "resources": [
                            {
                                "link": "https://developer.apple.com/xcode/",
                                "title": "Xcode - Apple's IDE for iOS Development"
                            },
                            {
                                "link": "https://developer.android.com/studio",
                                "title": "Android Studio - Official IDE for Android Development"
                            }
                        ]
                    },
                    {
                        "id": "mobile_03",
                        "title": "User Interface Design",
                        "description": "Understanding the principles of user interface design for mobile apps.",
                        "resources": [
                            {
                                "link": "https://www.smashingmagazine.com/2020/01/ui-design-mobile-apps/",
                                "title": "UI Design for Mobile Apps"
                            }
                        ]
                    },
                    {
                        "id": "mobile_04",
                        "title": "Testing Mobile Applications",
                        "description": "Methods and tools for testing mobile applications to ensure quality.",
                        "resources": [
                            {
                                "link": "https://www.browserstack.com/guide/mobile-app-testing",
                                "title": "A Guide to Mobile App Testing"
                            }
                        ]
                    },
                    {
                        "id": "mobile_05",
                        "title": "Publishing Apps",
                        "description": "Steps to publish your app on the App Store and Google Play Store.",
                        "resources": [
                            {
                                "link": "https://developer.apple.com/app-store/review/guidelines/",
                                "title": "Apple App Store Review Guidelines"
                            },
                            {
                                "link": "https://developer.android.com/distribute/best-practices/launch",
                                "title": "Best Practices for Launching Your App on Google Play"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const roadmapListApi = async () => {
    try {
        return roadmaps;
    } catch (error) {
        console.log(error);
    }
};

export const roadmapListApiSort = async () => {
    try {
        return roadmaps;
    } catch (error) {
        console.log(error);
    }
};
export const roadmapId = async (id) => {
    try {
        return roadmaps[id - 1];
    } catch (error) {
        console.log(error);
    }
};