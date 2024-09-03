document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupContent = document.querySelector('.popup-content');
    const closePopupButton = document.querySelector('.close-popup');
    const enrollButton = document.querySelector('.enroll-btn');
    const popupTitle = document.getElementById('popup-title');
    const popupDetails = document.getElementById('popup-details');



    const courseDetails = {
        'ADCA': {
            title: 'ADVANCE DIPLOMA IN COMPUTER APPLICATION',
            content: `
            <p><strong>Duration:</strong> 12 Months</p>
            <p><strong>Schedule:</strong> Monday to Friday, 6:00 PM - 9:00 PM</p>
            <p><strong>Fees:</strong> Rs 14,999</p>
            <p><strong>Prerequisites:</strong> Basic computer skills</p>

            <h3>Course Syllabus:</h3>
            <br>
                <p><strong>Course Overview:</strong> </p>          
                <p>This part-time, one-year course is designed to provide students with a strong foundation in computer applications and empower them for self-employment opportunities. The course covers various subjects including fundamentals of computer, computer software, graphic designing, operating systems, programming language, database management, internet, web page designing, and Tally Prime with GST. The syllabus is designed to be flexible, allowing for modifications based on the requirements of learners and the location. </p>
                               
                
            <p><strong>Course Teaching Methodology:</strong> 
            <ol>
                    <li>Lectures: In-class lectures will be conducted to explain theoretical concepts and principles.</li>
                    <li>Practical Sessions: Hands-on practical sessions will be provided to develop technical skills and proficiency.</li>
                    <li>Assignments: Regular assignments will be given to reinforce learning and assess students' understanding.</li>
                    <li>Group Projects: Collaborative projects will be assigned to enhance teamwork and problem-solving abilities.</li>
                    <li>Case Studies: Real-world case studies will be discussed to provide practical insights and applications.</li>
                    <li> Guest Lectures: Industry experts will be invited to share their experiences and provide industry insights.</li>
            </ol>
                <br>
                <p><strong>Topics:</strong> <br>Fundamentals of Computer, Storage Devices, Computer Software, Graphic Designing, Operating System and Application Program, Microsoft Office, Programming Language,Practical on Application Program,Database Management System,Internet and Web Page Designing,Tally Prime with GST.</p>
                <p><strong>Career Opportunities:</strong> Web Developer, Front-end Developer, Back-end Developer, Full-stack Developer</p>
                <h3>Course Outline:</h3>
                <ul>
                    <li><strong>Duration: 1 Months</strong>: Fundamentals of Computer => Introduction to Computer (1 Week) => Definition and Overview, Applications of Computers, Computer System Concepts (1 Week)=> Hardware vs. Software,Input, Output, and Processing Devices, Generations of Computers (1 Week) => First to Fifth Generation,Evolution and Key Features, Basic Components of a Computer System (1 Week) => CPU, Memory, Input/Output Devices,System Unit and Peripheral Devices, Memory (2 Weeks)=> Types of Memory: RAM, ROM, EPROM, PROM,Memory Hierarchy and Cache Memory </li>

                    <li><strong>Duration: 1 Months</strong>: Storage Fundamentals (1 Week) => Definition and Importance,Data Organization and Storage Methods. Data Storage and Retrieval Methods (1 Week) => Sequential and Random Access, Data Backup and Restoration Techniques. Various Storage Devices (2 Weeks)

 => Magnetic Storage: Cartridge Tape, Data Drives, Hard Disk Drives. Optical Storage: Floppy Disk, CDs, VCDs, DVDs, Zip Drive, SVCD. Modern Storage: USB Flash Drives, SSDs, Cloud Storage </li>
                    <li><strong>Duration: 2 Months</strong>: Types of Software (1 Week) => System Software vs. Application Software. Utility Software. Operating Systems (2 Weeks) => Functions and Types (Single-user, Multi-user, Network OS). Examples: Windows, Linux, macOS Programming Languages (1 Week) => Levels of Languages: Machine, Assembly, High-Level. Popular Languages: Python, Java, etc.Data Representation in Computers (2 Weeks) => Binary, Octal, Decimal, and Hexadecimal Number Systems. Number System of Computers (1 Week) => Conversion between Number Systems. Coding System (1 Week) => ASCII, BCD, EBCDIC. Computer Viruses (1 Week) => Types, Spread, and Prevention</li>

                    <li><strong>Duration: 1 Months</strong>: Graphic Designing => Corel Draw (3 Weeks) => Introduction and Basics of Vector Graphics. Creating and Editing Designs. Working with Layers, Text, and Colors. Photoshop (2 Weeks) => Introduction to Raster Graphics. Image Editing and Retouching. Working with Filters, Effects, and Brushes. PageMaker (1 Week) => Basics of Desktop Publishing. Creating Brochures, Flyers, and Newsletters. </li>

                    <li><strong>Duration: 1 Months</strong>: Operating System and Application Program => Disk Operating System (DOS) (2 Weeks) => DOS Basics: Overview of DOS, File Management. Basic DOS Commands: Internal and External Commands. Windows (3 Weeks)=> Introduction to Windows OS. Basic Features and Navigation. File Management and System Tools. Linux (3 Weeks) => Linux Basics: Overview and History, File System Structure. Basic Linux Commands: File Operations, Directory Navigation, User and Permission Management.</li>
                    <li><strong>Duration: 1 Months</strong>: Microsoft Office (MS Word, Excel, PowerPoint) => MS Word (3 Weeks) => Document Creation and Formatting. Working with Templates, Styles, and Tables. Mail Merge and Macros MS Excel (3 Weeks) => Spreadsheet Basics, Formulas, Functions, and Data Analysis, Creating Charts and PivotTables MS PowerPoint (2 Weeks) => Creating Presentations. Adding Animations, Transitions, and Multimedia. Delivering Effective Presentations.</li>
                    <li><strong>Duration: 1 Months</strong>: Programming Language: Python => Introduction to Python (2 Weeks)=> Overview of Python Programming Language. Setting Up the Development Environment Python Basics (3 Weeks) => Data Types, Variables, and Operators. Input and Output Functions. Conditional Statements (if, if-else, elif) Loops and Iteration (1 Week) => for, while, and nested loops. Functions in Python (2 Weeks) => Defining and Calling Functions. Lambda Functions, Map, Filter, Reduce. Lists, Tuples, and Dictionaries (1 Week) => Operations, Slicing, and Comprehensions. Practical on Python Programming (1 Week) => Hands-on Coding Exercises. Mini-Projects and Problem-Solving</li>
                    <li><strong>Duration: 1 Months</strong>: Practical on Application Program => MS Office Practical (2 Weeks) => Real-world Scenarios and Tasks. Integration of Office Tools for Projects. Graphic Design Practical (2 Weeks) => Practical Design Projects using Corel Draw, Photoshop. Operating Systems Practical (2 Weeks) => Working with DOS, Windows, and Linux. Command-line Tasks and GUI Operations. </li>
                    <li><strong>Duration: 1 Months</strong>: Database Management System => Database Tables (1 Week) => Table Creation, Modification, and Deletion. Data Types and Constraints. Query Basics and SQL (2 Weeks) => Introduction to SQL. Writing Basic Queries: SELECT, INSERT, UPDATE, DELETE. Join Operations and Subqueries. Report (1 Week) => Generating Reports from Databases. Formatting and Presenting Data. </li>
                    <li><strong>Duration: 1 Months</strong>: Internet and Web Page Designing => Internet (2 Weeks) => Introduction and Basics of Internet. Connecting to the Internet and Internet Safety. World Wide Web (WWW) (2 Weeks) => History, Working, Web Browsers, Functions. Concept of Search Engines, Searching the Web. HTTP, URLs, Web Servers, Web Protocols. HTML (2 Weeks) => Basics of HTML. Creating Simple Web Pages. HTML Tags, Attributes, and Structure. </li>
                    <li><strong>Duration: 1 Months</strong>: Tally with GST => Introduction to Tally  (2 Weeks) => Overview of Tally Software. Company Creation and Configuration. Working with GST (1 Week) => GST Concepts and Tally Integration. Invoicing, Returns, and Compliance. Accounting in Tally (1 Week) => Ledger and Group Creation. Voucher Entry and Financial Statements</li>
                </ul>
                <br>
                <p><strong>Job Placement Assistance:</strong> Upon completion, you'll receive personalized career coaching and access to our network of hiring partners.</p>

                <strong>Note:</strong> The syllabus can be customized and modified based on the specific requirements of learners or the location.
            `
        },
        'ADCS': {
            title: 'ADVANCE DIPLOMA IN COMPUTER SOFTWARE (ADCS)',
            content: `
                <p><strong>Duration:</strong> 12 Months</p>
                <p><strong>Schedule:</strong> Monday to Friday, 3:00 PM - 9:00 PM</p>
                <p><strong>Fees:</strong> Rs 12,999</p>
                <p><strong>Prerequisites:</strong> Basic computer skills</p>
                
                <h3>Course Objectives:</h3>
                <ul>
                    <li>To provide comprehensive knowledge of computer software applications and skills necessary for self-employment and career growth.</li>
                    <li>To develop proficiency in various software tools and technologies widely used in the industry.</li>
                    <li>To enhance computer literacy and digital skills for personal and professional use.</li>
                    <li>To equip students with the necessary skills to pursue self-employment opportunities in the field of computer software.</li>
                </ul>
                
                <h3>Course Overview:</h3>
                <p>This part-time, one-year course is designed to provide students with a strong foundation in computer software and practical skills required for employment or self-employment. It covers a range of applications including MS Office, Tally Prime, DTP, data entry, internet usage, typing, and hardware and networking basics. The course adopts a hands-on approach to learning, enabling students to gain practical experience and develop competencies for their careers or ventures.</p>
                
                <h3>Course Teaching Methodology:</h3>
                <ol>
                    <li>Lectures: In-class lectures will explain theoretical concepts and principles.</li>
                    <li>Practical Sessions: Hands-on sessions to develop technical skills and proficiency.</li>
                    <li>Assignments: Regular assignments to reinforce learning and assess understanding.</li>
                    <li>Group Projects: Collaborative projects to enhance teamwork and problem-solving abilities.</li>
                    <li>Case Studies: Real-world case studies to provide practical insights and applications.</li>
                    <li>Guest Lectures: Industry experts will share their experiences and provide insights.</li>
                </ol>
                
                <h3>Topics:</h3>
                <p>Computer Fundamentals, MS Office, Tally Prime, Desktop Publishing (DTP), Data Entry, Internet, Typing, Hardware & Networking Basics</p>
                
                <h3>Course Outline:</h3>
                <ul>
                    <li><strong>Duration: 1 Month</strong>: <br>Computer Fundamentals => Introduction to Computers (1 Week) => Definition and Overview, Applications of Computers <br> Computer Hardware and Software (1 Week) => Hardware vs. Software, Input, Output Devices <br> Operating Systems (1 Week) => OS Basics, Types, and Functions <br> File Management (1 Week) => Organization and Management <br> Computer Security and Ethics (1 Week) => Basic Security Concepts and Ethical Issues</li>
                    
                    <li><strong>Duration: 1 Month</strong>: <br>MS Office => Microsoft Word (3 Weeks) => Document Creation, Formatting, Styles <br> Microsoft Excel (3 Weeks) => Spreadsheets, Formulas, Charts <br> Microsoft PowerPoint (2 Weeks) => Presentation Creation, Animations</li>
                    
                    <li><strong>Duration: 1 Month</strong>: <br>Tally Prime => Introduction to Tally Prime (2 Weeks) => Overview, Setup <br> Creating Company and Ledger Accounts (2 Weeks) => Account Management <br> Recording Transactions (2 Weeks) => Transaction Entry, Reports</li>
                    
                    <li><strong>Duration: 1 Month</strong>: <br>Desktop Publishing (DTP) => Corel Draw (2 Weeks) => Basics of Vector Graphics <br> Photoshop (2 Weeks) => Image Editing, Retouching <br> PageMaker (2 Weeks) => Design Principles, Creating Publications</li>
                    
                    <li><strong>Duration: 1 Month</strong>: <br>Data Entry => Concepts and Techniques (2 Weeks) => Basics, Speed Improvement <br> Data Validation and Management (2 Weeks) => Techniques, Organization</li>
                    
                    <li><strong>Duration: 1 Month</strong>: <br>Internet => Basics of Internet (2 Weeks) => Web Browsing, Safety <br> Email Communication (1 Week) => Usage and Etiquette <br> Online Research (1 Week) => Techniques and Tools <br> Internet Security (1 Week) => Safety Measures</li>
                    
                    <li><strong>Duration: 1 Month</strong>: <br>Typing => Touch Typing Techniques (2 Weeks) => Speed and Accuracy <br> Keyboard Layout and Ergonomics (1 Week) => Layout and Proper Use <br> Special Characters and Formatting (1 Week) => Advanced Typing Skills</li>
                    
                    <li><strong>Duration: 1 Month</strong>: <br>Hardware & Networking Basics => Computer Hardware (2 Weeks) => Components, Assembly <br> Troubleshooting Hardware (2 Weeks) => Common Issues <br> Networking Concepts (2 Weeks) => Basics and Setup</li>
                    
                </ul>
                
                <p><strong>Job Placement Assistance:</strong> Upon completion, you'll receive personalized career coaching and access to our network of hiring partners.</p>
    
                <strong>Note:</strong> The syllabus can be customized and modified based on the specific requirements of learners or the location.
            `
        },
'DSA': {
        title: 'DIPLOMA IN SOFTWARE APPLICATION',
        content: `
        <p><strong>Duration:</strong> 6 Months</p>
        <p><strong>Schedule:</strong> Monday to Friday, 3:00 PM - 4:00 PM</p>
        <p><strong>Fees:</strong> Rs 6,999</p>
        <p><strong>Prerequisites:</strong> Basic computer skills</p>

        <h3>Course Syllabus:</h3>
        <br>
            <p><strong>Course Overview:</strong></p>          
            <p>This part-time, six-month course is designed to provide students with a solid foundation in computer fundamentals and software applications. It includes training in popular software tools like MS Office, Tally Prime, internet usage, and graphic designing. The course focuses on practical skills and real-world applications to enhance employability and self-employment opportunities.</p>
                        
        <p><strong>Course Teaching Methodology:</strong>
        <ol>
            <li>Lectures: Interactive sessions to explain theoretical concepts.</li>
            <li>Hands-on Practice: Practical exercises to develop proficiency in software applications.</li>
            <li>Case Studies: Analysis of real-life scenarios to understand practical applications.</li>
            <li>Group Discussions: Encouraging active participation and idea sharing.</li>
            <li>Projects: Simulated real-world challenges to enhance problem-solving skills.</li>
            <li>Guest Lectures: Insights from industry experts.</li>
            <li>Online Resources: Additional tutorials and articles for self-study.</li>
        </ol>
        <br>
        <p><strong>Topics:</strong> Computer Fundamentals, Windows OS, MS Office (Word, Excel, PowerPoint), MS Access and DBMS, Tally Prime, Internet, Hardware and Networking Concepts, Graphic Designing, PageMaker/InDesign, Photoshop, CorelDraw, Printing Technologies.</p>
        
        <h3>Course Outline:</h3>
        <ul>
            <li><strong>Duration: 1 Month</strong>: Computer Fundamentals => Introduction to Computers (1 Week) => Operating Systems, Hardware vs. Software, File Management. <br> Windows OS (3 Weeks) => Desktop Navigation, File Operations, System Maintenance.</li>

            <li><strong>Duration: 1 Month</strong>: MS Office (1 Week) => MS-Word: Document Formatting, Page Layout. <br> MS-Excel (1 Week) => Data Entry, Formulas, PivotTables. <br> MS-PowerPoint (1 Week) => Slide Creation, Multimedia, Presentation Delivery.</li>

            <li><strong>Duration: 1 Month</strong>: MS-Access and DBMS => Introduction to Databases (2 Weeks) => Creating and Managing Databases, Designing Tables. <br> Tally Prime (2 Weeks) => Company Creation, Accounting Management, Financial Reporting.</li>

            <li><strong>Duration: 1 Month</strong>: Internet Usage (2 Weeks) => Web Browsing, Email Communication. <br> Online Safety (1 Week) => Security Practices. <br> Hardware and Networking Concepts (1 Week) => Computer Components, Network Topologies, IP Addressing.</li>

            <li><strong>Duration: 1 Month</strong>: Graphic Designing => PageMaker/InDesign (1 Week) => Document Layout, Typography. <br> Photoshop (1 Week) => Image Editing, Layers, Retouching. <br> CorelDraw (1 Week) => Vector Graphics, Logo Design. <br> Printing Technologies (1 Week) => Print File Preparation, Finishing Techniques.</li>

            <li><strong>Duration: 1 Month</strong>: Practical Sessions => MS Office (2 Weeks) => Real-world Projects. <br> Graphic Design (2 Weeks) => Design Projects. <br> Hardware and Networking (2 Weeks) => Practical Troubleshooting, Maintenance.</li>
        </ul>
        <br>
        <p><strong>Job Placement Assistance:</strong> Personalized career coaching and access to our network of hiring partners will be provided upon completion.</p>

        <strong>Note:</strong> The syllabus can be customized based on specific requirements or location-based considerations.
        `
    },
    
    
'EthicalHacking': {
        title: 'CERTIFICATE IN ETHICAL HACKING',
        content: `
        <p><strong>Duration:</strong> 2 Months</p>
        <p><strong>Schedule:</strong> Monday to Friday, 6:00 PM - 8:00 PM</p>
        <p><strong>Fees:</strong> Rs 25,999.00</p>
        
        <h3>Course Syllabus:</h3>
        <br>
        <p><strong>Course Overview:</strong> </p>
        <p>This intensive two-month course is designed to equip students with essential skills in ethical hacking and cybersecurity. The course focuses on practical skills for identifying and mitigating security vulnerabilities, and prepares students for roles as ethical hackers or cybersecurity professionals. The syllabus is adaptable to meet the specific needs of learners and the region.</p>

        <p><strong>Course Teaching Methodology:</strong> 
        <ol>
            <li>Lectures: Theoretical concepts will be explained through engaging classroom lectures.</li>
            <li>Hands-On Labs: Practical exercises and simulations to apply ethical hacking skills.</li>
            <li>Capture The Flag (CTF) Challenges: Interactive challenges to test and apply knowledge.</li>
            <li>Group Discussions: Collaborative activities on security topics.</li>
            <li>Guest Lectures: Insights from industry experts on current trends and best practices.</li>
            <li>Mentorship: Guidance on career pathways and self-employment opportunities in cybersecurity.</li>
        </ol>
        <br>
        <p><strong>Topics:</strong> <br>Introduction to Ethical Hacking, Footprinting and Reconnaissance, Scanning Networks and Enumeration, System Hacking, Malware Threats, Sniffing and Social Engineering, Denial of Service (DoS) and Session Hijacking, Hacking Web Servers and Applications, Hacking Wireless Networks and Mobile Platforms, Evading IDS, Firewalls, and Honeypots, Cloud Computing and Cryptography.</p>

        <h3>Course Outline:</h3>
        <ul>
            <li><strong>Duration: 1 Weeks</strong>: Introduction to Ethical Hacking => Understanding Ethical Hacking, Differentiating from Malicious Hacking, Legal and Ethical Aspects, Scope and Responsibilities.</li>
            <li><strong>Duration: 1 Weeks</strong>: Footprinting and Reconnaissance => Information Gathering, Enumeration of Target Systems, Scanning for Vulnerabilities, Vulnerability Assessment Tools.</li>
            <li><strong>Duration: 1 Weeks</strong>: Scanning Networks and Enumeration => Network Scanning Tools, Enumeration of Network Services, Extracting User and System Information.</li>
            <li><strong>Duration: 1 Weeks</strong>: System Hacking => Password Cracking Techniques, Privilege Escalation, Maintaining Access, Covering Tracks.</li>
            <li><strong>Duration: 1 Week</strong>: Malware Threats => Types of Malware, Detecting and Analyzing, Prevention and Removal.</li>
            <li><strong>Duration: 1 Week</strong>: Sniffing and Social Engineering => Packet Sniffing, Countermeasures, Social Engineering Attacks and Defense.</li>
            <li><strong>Duration: 1 Weeks</strong>: Denial of Service (DoS) and Session Hijacking => DoS Attack Types, Prevention, Session Hijacking Techniques, Protection.</li>
            <li><strong>Duration: 1 Weeks</strong>: Hacking Web Servers and Applications => Web Server Vulnerabilities, Hacking Techniques for Web Applications, SQL Injection Attacks and Prevention.</li>
            <li><strong>Duration: 1 Weeks</strong>: Hacking Wireless Networks and Mobile Platforms => Wireless Network Vulnerabilities, Encryption Cracking, Mobile Platform Vulnerabilities, Security.</li>
            <li><strong>Duration: 1 Week</strong>: Evading IDS, Firewalls, and Honeypots => IDS Basics, Firewall Evasion Techniques, Detecting Honeypots.</li>
            <li><strong>Duration: 1 Week</strong>: Cloud Computing and Cryptography => Cloud Security Challenges, Cryptography Fundamentals, Encryption Techniques.</li>
        </ul>
        <br>
        <p><strong>Career Opportunities:</strong> Ethical Hacker, Cybersecurity Consultant, Penetration Tester, Security Analyst</p>
        <strong>Note:</strong> The syllabus can be customized based on specific learner requirements or location.
        `
    },
    
    'DIPLOMA_IN_COMPUTER_BASED_ENGLISH_TYPING': {
        title: 'DIPLOMA IN COMPUTER BASED ENGLISH TYPING - 30 W.P.M.',
        content: `
        <p><strong>Duration:</strong> 4 Months</p>
        <p><strong>Schedule:</strong> Monday to Friday, 4:00 PM - 5:00 PM</p>
        <p><strong>Fees:</strong> Rs 5,999.00</p>
        <p><strong>Prerequisites:</strong> Basic Computer Skills</p>

        <h3>Course Overview:</h3>
        <p>This 4-month course is designed to help students achieve a typing speed of 30 words per minute in English, with a focus on accuracy and efficiency. The course includes rigorous practice sessions, speed tests, and personalized feedback to ensure steady progress.</p>
        
        <h3>Course Teaching Methodology:</h3>
        <ol>
            <li>Practice Sessions: Daily typing exercises to improve speed and accuracy.</li>
            <li>Speed Tests: Regular speed tests to measure progress and adjust practice focus.</li>
            <li>Personalized Feedback: Individual feedback sessions to address specific areas of improvement.</li>
            <li>Typing Software: Utilization of specialized typing software for guided practice.</li>
        </ol>
        
        <h3>Career Opportunities:</h3>
        <p>Completion of this course can open up opportunities for roles such as data entry operator, administrative assistant, and other clerical positions that require proficient typing skills.</p>
        `
    },
'WebDesignAndDevelopment': {
        title: 'Diploma in Web Designing and Web Development',
        content: `
        <p><strong>Duration:</strong> 12 Months</p>
        <p><strong>Schedule:</strong> Monday to Friday, 6:00 PM - 9:00 PM</p>
        <p><strong>Fees:</strong> Rs 39,999</p>
        <p><strong>Prerequisites:</strong> Basic computer skills</p>

        <h3>Course Syllabus:</h3>
        <br>
            <p><strong>Course Overview:</strong> </p>          
            <p>This part-time, one-year course is designed to provide students with comprehensive knowledge and practical skills in web designing and web development. The course is divided into three parts, each focusing on different aspects of the field, ensuring a thorough understanding and mastery of web technologies. The syllabus is designed to be flexible, allowing for modifications based on the requirements of learners and the location.</p>
                           
        <p><strong>Course Teaching Methodology:</strong> 
        <ol>
                <li>Lectures: In-class lectures will be conducted to explain theoretical concepts and principles.</li>
                <li>Practical Sessions: Hands-on practical sessions will be provided to develop technical skills and proficiency.</li>
                <li>Assignments: Regular assignments will be given to reinforce learning and assess students' understanding.</li>
                <li>Group Projects: Collaborative projects will be assigned to enhance teamwork and problem-solving abilities.</li>
                <li>Case Studies: Real-world case studies will be discussed to provide practical insights and applications.</li>
                <li>Guest Lectures: Industry experts will be invited to share their experiences and provide industry insights.</li>
        </ol>
            <br>
            <p><strong>Topics:</strong> <br>Web Designing, User Experience Design, Typography, Color Theory, HTML, CSS, JavaScript, PHP, SQL, Responsive Design, Bootstrap, React, Angular, WordPress, SEO, and Web Analytics.</p>
            <p><strong>Career Opportunities:</strong> Web Designer, Front-end Developer, Back-end Developer, Full-stack Developer, Web Developer, UI/UX Designer</p>
            <h3>Course Outline:</h3>
            <ul>
                <li><strong>Duration: 3 Months</strong>: Introduction to Web Designing => Fundamentals of web designing, User experience design, Typography, Color theory, Layout and composition, Introduction to Adobe Photoshop and Illustrator, Designing responsive websites using HTML and CSS.</li>

                <li><strong>Duration: 3 Months</strong>: Introduction to Web Development => Fundamentals of web development, Client-side scripting using JavaScript, Basics of server-side scripting using PHP, Understanding databases and SQL, Creating dynamic web pages using AJAX, Creating web forms and handling form data.</li>
                
                <li><strong>Duration: 6 Months</strong>: Advanced Web Design and Development => Advanced HTML and CSS techniques, CSS preprocessors (SASS/LESS), Responsive design with Bootstrap, JavaScript frameworks (React, Angular, Vue), CMS (WordPress, Drupal), Search engine optimization (SEO) and web analytics, Basics of entrepreneurship and business skills.</li>
            </ul>
            <br>
            <p><strong>Job Placement Assistance:</strong> Upon completion, you'll receive personalized career coaching and access to our network of hiring partners.</p>

            <strong>Note:</strong> The syllabus can be customized and modified based on the specific requirements of learners or the location.
      `  
    },

    'PythonCertificate': {
        title: 'Certificate in Python Programming',
        content: `
        <p><strong>Duration:</strong> 2 Months</p>
        <p><strong>Schedule:</strong> Monday to Friday, 6:00 PM - 8:00 PM</p>
        <p><strong>Fees:</strong> Rs 9,999.00</p>
        <p><strong>Prerequisites:</strong> Basic computer skills</p>

        <h3>Course Syllabus:</h3>
        <br>
        <p><strong>Course Overview:</strong> </p>          
        <p>This 2-month part-time course is designed to equip students with the fundamental skills required for Python programming. The course covers various aspects of Python, from basic syntax to advanced topics like exception handling. Students will gain hands-on experience in Python programming and will be well-prepared for careers in software development, data analysis, and more. The syllabus is designed to be flexible, allowing for modifications based on the requirements of learners and the location.</p>

        <p><strong>Course Teaching Methodology:</strong> 
        <ol>
            <li>Lectures: In-class lectures will be conducted to explain Python programming concepts and principles.</li>
            <li>Practical Sessions: Hands-on practical sessions will be provided to develop technical skills and proficiency.</li>
            <li>Assignments: Regular assignments will be given to reinforce learning and assess students' understanding.</li>
            <li>Group Projects: Collaborative projects will be assigned to enhance teamwork and problem-solving abilities.</li>
            <li>Guest Lectures: Industry experts will be invited to share their experiences and provide industry insights.</li>
        </ol>
        <br>

        <p><strong>Course Contents:</strong> </p>
        <h3>Course Outline:</h3>
        <ul>
            <li><strong>Duration: 1 Week</strong>: Introduction => Overview of Python and its applications, Importance of Python in the modern software development landscape.</li>

            <li><strong>Duration: 1 Week</strong>: History and Features => A brief history of Python and its evolution, Key features of Python, including simplicity, readability, and versatility.</li>

            <li><strong>Duration: 1 Week</strong>: Setting up Path and Working with Python => Installing and setting up Python on different platforms, Writing and running Python programs, Python development environments.</li>

            <li><strong>Duration: 1 Week</strong>: Basic Syntax and Variables => Understanding Python syntax, indentation, and code structure. Variables, data types, and type conversion in Python.</li>

            <li><strong>Duration: 1 Week</strong>: Operators and Conditional Statements => Arithmetic, logical, and comparison operators. If statements, if-else statements, nested if-else statements.</li>

            <li><strong>Duration: 1 Week</strong>: Looping and Control Statements => For loops, while loops, nested loops, break, continue, and pass statements.</li>

            <li><strong>Duration: 1 Week</strong>: String Manipulation and Functions => Accessing strings, basic string operations, string slices. Defining and calling functions, types of functions, function arguments, anonymous functions, global and local variables.</li>

            <li><strong>Duration: 1 Week</strong>: Lists, Tuples & Dictionaries => Introduction to lists, tuples, and dictionaries. Operations, accessing elements, functions, and methods for each data structure.</li>

            <li><strong>Duration: 1 Week</strong>: Modules and Input-Output => Importing modules, working with math and random modules, packages and composition. Printing on screen, reading data from the keyboard, file operations.</li>

            <li><strong>Duration: 1 Week</strong>: Exception Handling => Understanding exceptions, using the except clause, try-finally clause, and user-defined exceptions.</li>
        </ul>
        <br>
        <p><strong>Career Opportunities:</strong> Software Developer, Data Analyst, Automation Engineer, Python Developer</p>
        <p><strong>Job Placement Assistance:</strong> Upon completion, you'll receive personalized career coaching and access to our network of hiring partners.</p>

        <strong>Note:</strong> The syllabus can be customized and modified based on the specific requirements of learners or the location.
        `
    },

    'EnglishGrammar': {
        title: 'Certificate in English Grammar',
        content: `
        <p><strong>Duration:</strong> 3 Months</p>
        <p><strong>Schedule:</strong> Monday to Friday, 3:00 PM - 4:00 PM</p>
        <p><strong>Fees:</strong> Rs 4,999</p>

        <h3>Course Syllabus:</h3>
        <br>
            <p><strong>Course Overview:</strong> </p>          
            <p>The English Grammar Skill Development Course is a 3-month part-time program tailored to help Indian students enhance their English grammar skills. The course focuses on understanding and applying key grammar concepts, including parts of speech, sentence analysis, punctuation, and the usage of nouns, pronouns, adjectives, adverbs, verbs, participles, gerunds, prepositions, and conjunctions. It is specifically designed to improve language proficiency for self-employment and career growth.</p>
                           
        <p><strong>Course Teaching Methodology:</strong> 
        <ol>
            <li>Lectures: In-depth theoretical sessions explaining grammar concepts.</li>
            <li>Interactive Exercises: Practical application through exercises.</li>
            <li>Sentence Analysis: Analyzing and parsing sentences.</li>
            <li>Punctuation Practice: Learning correct punctuation usage.</li>
            <li>Grammar Drills: Reinforcing grammar rules through drills.</li>
            <li>Group Discussions: Encouraging conversation and application of grammar concepts.</li>
            <li>Assignments: Practical tasks to reinforce learning.</li>
        </ol>
            <br>
            <p><strong>Topics:</strong> 
                <ul>
                    <li><strong>Module 1: Parts of Speech</strong> (1 Month) => Understanding Nouns, Pronouns, Verbs, Adjectives, and Adverbs. Practicing Identification and Usage.</li>
                    <li><strong>Module 2: Sentence Analysis and Mixed Clause Analysis</strong> (1 Month) => Sentence Structure and Types. Mixed Clause Analysis for Complex Sentences.</li>
                    <li><strong>Module 3: Punctuation</strong> (1 Week) => Correct Usage of Commas, Periods, Question Marks, and More. Punctuation Rules and Guidelines.</li>
                    <li><strong>Module 4: Nouns and Pronouns</strong> (1 Week) => Noun Types and Functions. Pronoun Types and Correct Usage.</li>
                    <li><strong>Module 5: Adjectives, Adverbs, and Verbs</strong> (2 Weeks) => Descriptive Words: Adjectives and Adverbs. Verb Forms, Tenses, and Agreement.</li>
                    <li><strong>Module 6: Participles, Gerunds, Prepositions, and Conjunctions</strong> (2 Weeks) => Understanding Participles and Gerunds. Correct Usage of Prepositions and Conjunctions.</li>
                </ul>
            </p>
            <br>
            <p><strong>Course Evaluation:</strong> Continuous Assessment through Grammar Exercises and Assignments. Mid-term Grammar Test. Final Grammar Proficiency Test.</p>
            <p><strong>Job Placement Assistance:</strong> Upon completion, students will receive personalized career coaching and access to our network of hiring partners to support their career growth.</p>

            <strong>Note:</strong> The syllabus can be customized and modified based on the specific requirements of learners or the location.
            `
    },
    'HTML': {
        title: 'Diploma in HTML',
        content: `
        <p><strong>Duration:</strong> 6 Months</p>
        <p><strong>Schedule:</strong> Monday to Friday, 4:00 PM - 5:30 PM</p>
        <p><strong>Fees:</strong> Rs 9,999</p>

        <h3>Course Syllabus:</h3>
        <br>
            <p><strong>Course Overview:</strong> </p>          
            <p>This 6-month part-time course is designed to provide comprehensive knowledge of HTML5 and its role in web design, enabling students to create, format, and structure web pages, build responsive and visually appealing websites, and prepare for careers in web development or self-employment opportunities. The course emphasizes the importance of HTML5 and CSS3 in modern web design, with flexibility to modify the syllabus based on learners' needs.</p>
            
        <p><strong>Course Teaching Methodology:</strong> 
        <ol>
            <li>Interactive classroom lectures and discussions.</li>
            <li>Hands-on coding sessions and web development projects.</li>
            <li>Practical assignments and coding challenges.</li>
            <li>Real-world examples and case studies.</li>
            <li>Regular quizzes and assessments.</li>
            <li>Peer and instructor feedback on web projects.</li>
            <li>Access to online resources and web development tools.</li>
        </ol>
            <br>
            <p><strong>Course Outline:</strong></p>
            <ul>
                <li><strong>Duration: 4 Weeks</strong>: Module 1: Introduction to HTML5 and Web Design</li>
                <li><strong>Duration: 4 Weeks</strong>: Module 2: How to Create a Simple Web Page</li>
                <li><strong>Duration: 4 Weeks</strong>: Module 3: Web Links, Images, and Tables</li>
                <li><strong>Duration: 4 Weeks</strong>: Module 4: Forms and User Input</li>
                <li><strong>Duration: 4 Weeks</strong>: Module 5: Advanced Styling with CSS3</li>
                <li><strong>Duration: 4 Weeks</strong>: Module 6: HTML5 Multimedia and Canvas</li>
            </ul>
            <br>
            <p><strong>Career Opportunities:</strong> Web Developer, Front-end Developer, Freelance Web Designer</p>
            <p><strong>Job Placement Assistance:</strong> Upon completion, you'll receive personalized career coaching and access to our network of hiring partners.</p>
            <strong>Note:</strong> The syllabus can be customized and modified based on the specific requirements of learners or the location.
        `
    }

    };

    function openPopup(courseId) {
        const course = courseDetails[courseId];
        popupTitle.textContent = course.title;
        popupDetails.innerHTML = course.content;
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseId = button.closest('.course').dataset.courseId;
            openPopup(courseId);
        });
    });

    closePopupButton.addEventListener('click', closePopup);

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });

    enrollButton.addEventListener('click', () => {
        alert(`Thank you for your interest in the ${popupTitle.textContent} course! You will be redirected to the payment page.`);
        closePopup();
    });
});