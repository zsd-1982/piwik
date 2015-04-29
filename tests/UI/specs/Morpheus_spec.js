/*!
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

describe("Morpheus", function () {
    this.timeout(0);

    var url = "?module=Morpheus&action=demo";

    it("should show all UI components and CSS classes", function (done) {
        expect.screenshot('load').to.be.capture(function (page) {
            page.load(url);
        }, done);
    });
});
