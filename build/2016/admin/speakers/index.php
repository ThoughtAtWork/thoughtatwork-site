<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="js/jquery.tablesorter.min.js" type="text/javascript"></script>
    <script src="js/jquery.tablesorter.pager.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="speakers.css">

    <title>Speaker Database</title>

    <script type="text/javascript">
        $(document).ready(function () {

            $("table").tablesorter();
            zebraRows('tbody tr:odd td', 'odd');
            
            $("#add").unbind().click(function () {

                $('iframe').slideDown();
                $('#add').hide();
                $('#iframeContain').after('<a href="#" id="close">Close</a>');
            });

            $('body').on('click', '#close', function (e) {
                //console.log('close');

                $('iframe').slideUp();
                $('#add').show();
                $('#close').remove();
            });

            //Add a scrolling class to make headers stay at top of window when scrolling. Disabled for now
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 85) {
                    $("thead").addClass("scrolling");

                } else {
                    $("thead").removeClass("scrolling");
                }
            });

            //default each row to visible
            $('tbody tr').addClass('visible');
            //Filtering function http://code.tutsplus.com/tutorials/using-jquery-to-manipulate-and-filter-data--net-5351
            function filter(selector, query) {
                query = $.trim(query); //trim white space
                query = query.replace(/ /gi, '|'); //add OR for regex query

                $(selector).each(function () {
                    ($(this).text().search(new RegExp(query, "i")) < 0) ? $(this).hide().removeClass('visible'): $(this).show().addClass('visible');
                });
            }
            
            function zebraRows(selector, className) {
                  $(selector).removeClass(className).addClass(className);
                }
            
            $('#filter').show();
            $('#filter').keyup(function (event) {
                //if esc is pressed or nothing is entered
                if (event.keyCode == 27 || $(this).val() == '') {
                    //if esc is pressed we want to clear the value of search box
                    $(this).val('');

                    //we want each row to be visible because if nothing
                    //is entered then all rows are matched.
                    $('tbody tr').removeClass('visible').show().addClass('visible');
                }

                //if there is text, lets filter
                else {
                    filter('tbody tr', $(this).val());
                }
            });
        });
    </script>
</head>

<body>
    <div id="iframeContain">
        <iframe src="https://docs.google.com/forms/d/1QD2raLIDZsNav-bYmIP8jCpLnyHd1uI5pv8SpB6lrv4/viewform?embedded=true#start=embed">Loading...</iframe>
    </div>

    <label for="filter">Filter</label>
    <input type="text" name="filter" value="" autofocus id="filter" style="height:39px; width:30%; padding-left:10px;"/>
    <a href="#" id="add">Add a speaker</a>
    <p>Separate keywords with a space, no commas. <code>ESC</code> to clear. Sorting columns: <img src="http://thoughtatwork.cias.rit.edu/img/az.png" width="12" height="11" alt="a-z"/> Sort A-Z. <img src="http://thoughtatwork.cias.rit.edu/img/za.png" width="12" height="11" alt="z-a" /> Sort Z-A.</p>

    <div id="speakerList">

        <?php
        echo "<table class='tablesorter'>\n";
        $f = fopen("https://docs.google.com/spreadsheets/d/1jZ92x2i4jJIlvrD3s9p_M48wocSCZ7UKak7Ssnftth4/pub?output=csv", "r");
        if (!$f) {
            echo "<p>Unable to open remote file.\n";
            exit;
        }
        $count = 0;
        while (($line = fgetcsv($f)) !== false) {
            
            if ($count == 0) echo "\t<thead\n>";
            elseif ($count == 1) echo "\t<tbody>\n";
            
            echo "\t\t<tr>";
            foreach ($line as $cell) {
                if (substr( htmlspecialchars($cell), 0, 4 ) === "http") {
                        echo "\n\t\t\t<td><a href='" . htmlspecialchars($cell) . "' target='_blank'>" . htmlspecialchars($cell) . "</a></td>";
                    } elseif ($count == 0) echo "\n\t\t\t<th>" . htmlspecialchars($cell) . "</th>";
                else echo "\n\t\t\t<td>" . htmlspecialchars($cell) . "</td>";
            }
            echo "\n\t\t</tr>\n";
            
            if ($count == 0) echo "\t</thead>\n";
            $count++;
        }
        fclose($f);
        echo "\t</tbody>\n\t</table>\n";
    ?>
            <!--<div id="pager" class="pager">
            <form>
                <img src="http://thoughtatwork.cias.rit.edu/img/first.png" title="First page" class="first"/>
                <img src="http://thoughtatwork.cias.rit.edu/img/prev.png" title="Next page" class="prev"/>
                <input type="text" class="pagedisplay"/>
                <img src="http://thoughtatwork.cias.rit.edu/img/next.png" title="Next page" class="next"/>
                <img src="http://thoughtatwork.cias.rit.edu/img/last.png" title="Last page" class="last"/>
                <select class="pagesize">
                    <option selected="selected"  value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option  value="40">40</option>
                </select>
            </form>
        </div>-->
            <!--/pager-->

    </div>
    <!-- /speakerList -->

    <!--<form id="addCategory">
        <label for="addCategory">Add a new category</label>
        <br>
        <input id="categoryName" name="addCategory" type="text" value="" required/>

        <input type="submit" value="Submit" />
    </form>-->

    <!-- The result of the search will be rendered inside this div 
    <div id="catResult"></div> -->

</body>

</html>