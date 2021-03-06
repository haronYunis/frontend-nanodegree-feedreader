/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url are defined', function () {
            for (let i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }

        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function () {
            for (let i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }

        });
    });



    // New test suite that will test the menu
    describe('The Menu', function () {

        // Searches for the class of 'menu-hidden' in the body tag. If true, 
        // then the menu is hidden 
        it('menu element is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // Toggles on click event if the menu appears or disappears
        it('working toggle on click event', function () {
            // Calls the class of 'menu-icon-link' 
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            })
        })

        it('checking to see if .feed container is not empty', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        })


    })

    /* TODO: Write a new test suite named "New Feed Selection" */


    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    describe('New Feed Selection', function () {
        let firstFeed, secondFeed;

        beforeEach(function (done) {
            loadFeed(1, function () {
                console.log('firstFeed is loaded.');
                firstFeed = $('.feed').html

                loadFeed(2, function () {
                    console.log('second feed is loaded');
                    done();

                })
            })
        })

        afterEach(function () {
            loadFeed(0);
        })

        // it checks if two feeds are different 

        it('checks if two feeds are different', function () {
            secondFeed = $('.feed');
            expect(secondFeed).not.toEqual(firstFeed);
        })

    })
}());
