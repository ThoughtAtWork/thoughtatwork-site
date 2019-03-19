// Create an application module for our myApp.
var app = angular.module("myApp", []);


// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //


// I provide a means to scatter the individual letters within the content of
// the target element relative the mouse's relationship to the given converge
// target (either the current element or a provided selector).
// --
// CAUTION: Expects jQuery to be powering jqLite.
angular.module("myApp").directive(
    "scatterEffect",
    function scatterEffectDirective($document) {

        // Return the directive configuration object.
        return ({
            compile: compile,
            link: link,
            restrict: "A"
        });


        // I compile the template element, preparing it for the scatter effect.
        function compile(tElement, tAttributes) {

            // In order to make each letter scatter, we have to wrap each one in
            // an individual Span tag that can be positioned relatively.
            wrapLetters(tElement);

            // Return the linking function.
            return (this.link);


            // ---
            // PRIVATE METHODS.
            // ---


            // I find all the text nodes in the given parent (and its descendants)
            // and returns them as a single array.
            function findTextNodes(parent) {

                // NOTE: Because we are using jQuery under the hood, the .map()
                // function will collapse returned arrays.
                var textNodes = angular.element(parent).contents().map(
                    function operator(i, node) {

                        return ((node.nodeType === 1) ? findTextNodes(node) : node);

                    }
                );

                return (textNodes.toArray());

            }


            // I find and wrap each text-based letter, within the given parent,
            // in its own Span tag.
            function wrapLetters(parent) {

                findTextNodes(parent).forEach(
                    function(node) {

                        // Replace each individual letter with a Span tag.
                        var wrappedHtml = node.nodeValue.replace(/([^\s])/g, "<span class='coming-soon--scatter-item'>$1</span>");

                        var fragment = angular.element(document.createDocumentFragment())
                            .append(wrappedHtml);

                        node.parentNode.insertBefore(fragment[0], node);
                        node.parentNode.removeChild(node);

                    }
                );

            }

        }


        // I bind the JavaScript events to the DOM.
        function link(scope, element, attributes) {

            // If the converge target *selector* was provided, use it. Otherwise,
            // use the current element as the converge target.

            // var convergeTarget = attributes.scatterEffect ? angular.element(attributes.scatterEffect) : element;

            if (attributes.scatterEffect)
                var convergeTarget = angular.element(attributes.scatterEffect);
            // var convergeTarget = angular.element(document.getElementsByID("email"));
            else
                var convergeTarget = element;

            // Determine how far away their static position that letters can scatter.
            var maxScatterDistance = (parseInt(attributes.scatterDistance, 10) || 30);

            // Create our collection of letter configurations.
            var letters = element.find("span.coming-soon--scatter-item")
                .map(
                    function operator(i, node) {

                        return ({
                            target: angular.element(node),
                            maxX: generateRandomOffset(),
                            maxY: generateRandomOffset()
                        });

                    }
                )
                .toArray();

            // Start listening for the mouse move to adjust the layout of the
            // letters as the user moves closer to or farther from the converge
            // target.
            $document.mousemove(handleMousemove);


            //
            // $(function() {
            // 	$document.mousemove((function() {
            // 		var timer = null;
            //
            // 		return function() {
            // 			if (timer !== null) {
            // 				window.clearTimeout(timer);
            // 			}
            // 			timer = window.setTimeout(console.log($document.mousemove(handleMousemove)), 250);
            // 		};
            // 	})());
            // });



            // ---
            // PRIVATE METHODS.
            // ---


            // I generate a random offset in the range of -maxScatterDistance : maxScatterDistance.
            function generateRandomOffset() {

                // We are generating the random number multiples times to help
                // make the scattering seem more random. The JavaScript random()
                // function has a tendency to seem grouped.
                for (var i = 0; i < 30; i++) {

                    var value = (maxScatterDistance - (Math.random() * maxScatterDistance * 2))

                }

                return (value);

            }


            // I get the distance from the given {x,y} coordinate to the given
            // converge target. This uses the outer perimeter of the converge
            // target as the means of measurement.
            function getDistanceFromConverge(convergeTarget, x, y) {

                var offset = convergeTarget.offset();
                var width = convergeTarget.outerWidth();
                var height = convergeTarget.outerHeight();

                // Calculate the position of the four-sides of the target.
                var top = offset.top;
                var left = offset.left;
                var right = (left + width);
                var bottom = (top + height);

                // Calculate the horizontal leg (of the triangle).
                if (x < left) {

                    var deltaX = (left - x);

                } else if (x > right) {

                    var deltaX = (x - right);

                } else {

                    var deltaX = 0;

                }

                // Calculate the vertical leg (of the triangle).
                if (y < top) {

                    var deltaY = (top - y);

                } else if (y > bottom) {

                    var deltaY = (y - bottom);

                } else {

                    var deltaY = 0;

                }

                // Calculate the distance to the target using Pythagoras' theorem.
                // --
                // CAUTION: A^2 + B^2 = C^2 ... like a boss.
                return (Math.sqrt((deltaX * deltaX) + (deltaY * deltaY)));

            }


            // I handle the mouse movement event.
            function handleMousemove(event) {

                // Determine how far the mouse is from the converge target.
                var distance = getDistanceFromConverge(convergeTarget, event.pageX, event.pageY);
                // var distance = window.setTimeout(getDistanceFromConverge(convergeTarget, event.pageX, event.pageY), 0);

                // Update the layout of the letters to be proportional with the
                // distance to the converge target.
                positionScatterItems(distance);
                // window.setTimeout(, 2500);
            }


            // I position the scatter items based on the given distance of the
            // user's mouse from the converge target.
            function positionScatterItems(distance) {

                // NOTE: Using Math.min() because we only want to start
                // calculating percentage when the current distance is within
                // the bounds of max scatter distance.
                var percentage = Math.min(1, (distance / maxScatterDistance));
                letters.forEach(
                    function(letter) {
                        letter.target.css({
                            left: Math.floor(letter.maxX * percentage),
                            top: Math.floor(letter.maxY * percentage)
                        });
                    }
                );
            }
        }
    }
);

Pt = function() {
    var e = t(".randomtext"),
        i = "";
    t.each(e.text().split(""), function(t, e) {
            var n = 15 * (t + 1),
                r = Et(-n, n),
                o = 15 * (t + 1),
                s = Et(-o, o);
            i += '<span class="letter" data-randx="' + r + '" data-randy="' + s + '">' + e + "</span>"
        }),
        e.html(i),
        n.scattedTextLoaded = !0,
        At()
}, At = function() {
    var e = t("section.footer form input[type=text]\t"),
        n = i.querySelectorAll(".letter");
    t(".footer").unbind("mousemove").bind("mousemove", function(i) {
        for (var r = Dt(i, e), o = Nt(), s = r.x - o, a = r.y - Ot() - t(this).offset().top, l = Math.sqrt(s * s + a * a) / o, u = -2, c = -200, h = 0, f = n.length; h < f; h++) {
            var p, d, m = n[h].getAttribute("data-randx") * u * l,
                g = n[h].getAttribute("data-randy") * u * l;
            e.is(":hover") ? (d = 0,
                    p = 0) : (d = 5 * g,
                    p = 5 * m),
                TweenLite.to(n[h], .6, {
                    overwrite: !0,
                    css: {
                        top: d,
                        left: p
                    },
                    ease: Sine.easeOut
                }),
                u += .1,
                c += 20
        }
    })
}
