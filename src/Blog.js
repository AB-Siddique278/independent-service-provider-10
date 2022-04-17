import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className='container mt-5'>
                <div className='mt-3 mb-5'>
                    <h2>Difference Between Authorization and Authenticationn</h2>
                </div>
                <div className='row'>
                    <div className='col-md-6'>

                        <h3>Authorization</h3>
                        <ul>
                            <li>  Authorization is process of checking whether the user has access rights to the system</li>
                            <li>Usually done after successful authentication</li>
                            <li>Generally, transmits info through an Access Token</li>
                            <li>The factors essential for authorization are likely to differ by the security level.</li>
                            <li>Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access</li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <h3>Authenticationn</h3>

                        <ul>
                            <li>Authenticationn is the process of verifying the identiy of a user</li>
                            <li>Usually done before authorization</li>
                            <li>Generally, transmits info through an ID Token</li>
                            <li>	In general, authentication needs a username and password.</li>
                            <li>Example: Employees in a company are required to authenticate through the network before accessing their company email</li>
                        </ul>
                    </div>
                </div>

                <section>
                    <div>
                        <h2 className='my-5'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <div>
                            <h5>Why I using firebase</h5>
                            <p>
                                Firebase is a complete package of products that allows to build web and mobile apps, improve the app quality and help your clients grow their business.

                                <ul>
                                    <li> Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</li>

                                    <li>
                                        Create Application without backend server
                                    </li>

                                    <li>
                                        No SQL database so it is more faster
                                    </li>

                                    <li>
                                        No need extra money spent for backend server
                                    </li>

                                    <li>
                                        Sync real time data in the application
                                    </li>
                                    <li>
                                        Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen
                                    </li>
                                </ul>
                            </p>
                        </div>


                        <div>
                            <h5>What other options do I have to implement authentication</h5>

                            <ul>
                                <li>
                                    STYTCH : STYTCH is a staunch supporter of password-less authentication. It is focused on improving user experience and cutting developer headaches by doing just that.
                                </li>
                                <li>
                                Ory : Ory brings complete user experience control with its headless user authentication management.
                                </li>
                                <li>
                                Supabase : Supabase calls itself an open-source Firebase alternative.
                                </li>
                                <li>
                                Okta : Okta is again a flagbearer of password-less security. However, you can ask for the strongest passwords with Okta as well.
                                </li>
                                <li>
                                PingIdentity: PingIdentity is shaped as an intelligent central authentication module for all your cloud, in-house, and SaaS implementations.
                                </li>
                                <li>
                                Keycloak : Keycloak is an open-source user identity and access management platform.
                                </li>
                            </ul>
                        </div>


                    <div>
                        <h2 className='my-5'>What other services does firebase provide other than authentication</h2>

                        <ul>
                            <li>
                            <span className='font-weight-bold'>Firebase Realtime Database:</span>  was the first product to occur under the flag of Firebase, so it’s the most established and stable service across the whole platform. 
                            </li>
                            <li>
                            <span className='font-weight-bold'>Cloud Storage :</span>  Cloud Firestore is designed for enterprise use, which entails scalability, complex data models, and advanced querying options.  
                            </li>
                            <li>
                            <span className='font-weight-bold'>Hosting service:</span>  If you are building a web-app, progressive web app, or mobile landing page, you would definitely need hosting. Firebase offers static web hosting for applications built with HTML, CSS, and JavaScript. 
                            </li>
                            <li>
                            <span className='font-weight-bold'>Test Lab:</span>  is a service that provides virtual and physical device access to test your app in real-environment. It can be integrated into existing testing environment like Android Studio, or browser testing tools. 
                            </li>
                            <li>
                            <span className='font-weight-bold'>App Distribution:</span>  This tool is a beta-testing distribution service, that is currently in beta. Symbolic. App Distribution helps to create a single hub for two versions of the application (iOS and Android), and manage pre-release builds using CLI. 
                            </li>
                            <li>
                            <span className='font-weight-bold'>Firebase Realtime Database:</span>  was the first product to occur under the flag of Firebase, so it’s the most established and stable service across the whole platform. 
                            </li>
                        </ul>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;