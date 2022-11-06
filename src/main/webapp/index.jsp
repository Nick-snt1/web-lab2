<!--
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
-->
<!DOCTYPE html>

<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="utf-8">
    <title>Lab1</title>
</head>
<body>
    <table class="grid" id="main-grid">
        <!--header-->
        <tr>
            <td id="header" colspan="2">
                <span class="left-alignment">Vladimirov Nikita Alekseevich</span>
                <span class="right-alignment">#3305</span>
            </td>
        </tr>
        <!--/header-->
        <!--body-->
        <tr>
            <td >
                <div id="image-container">
                    <canvas id="graf" ></canvas>
                    <object type="image/svg+xml" data="images/pic.svg" width="100%" height="100%">
                        Your browser does not support svg
                    </object>
                </div>
            </td>

            <td id="input-container">

                <form action="" method="get" novalidate>
                    <table class="grid" id="input-grid"> 
                        <tr>   
                            <td>
                                <div class="line">
                                <label class="head-label" id="x">X: </label>
                            
                                <div class="radio-group">
                                <div class="radio-item">
                                    <input id="radio1" type="radio" name="x" value="-2" required>
                                    <label for="radio1">-2</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio2" type="radio" name="x" value="-1.5">
                                    <label for="radio2">-1.5</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio3" type="radio" name="x" value="-1">
                                    <label for="radio3">-1</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio4" type="radio" name="x" value="-0.5">
                                    <label for="radio4">-0.5</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio5" type="radio" name="x" value="0" checked>
                                    <label for="radio5">0</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio6" type="radio" name="x" value="0.5">
                                    <label for="radio6">0.5</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio7" type="radio" name="x" value="1" >  
                                    <label for="radio7">1</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio8" type="radio" name="x" value="1.5">
                                    <label for="radio8">1.5</label>
                                </div>
                                <div class="radio-item">
                                    <input id="radio9" type="radio" name="x" value="2">   
                                    <label for="radio9">2</label>
                                </div>
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="head-label">Y: </label>
                                <input 
                                    class="text-field" type="number" id="y-field" name="y" maxlength="6" min="-5" max="5" step="0.1" 
                                    autocomplete="off" placeholder="-5...5"  value="0" required>
                            </td>
                        </tr>
               
                        <tr>
                            <td>
                                <label class="head-label">R: </label>
                                <label><input type="checkbox" name="r" value="1" onclick="onlyOne(this)" checked><span class="button-label">1</span></label>
                                <label><input type="checkbox" name="r" value="2" onclick="onlyOne(this)" ><span class="button-label">2</span></label>
                                <label><input type="checkbox" name="r" value="3" onclick="onlyOne(this)" ><span class="button-label">3</span></label>
                                <label><input type="checkbox" name="r" value="4" onclick="onlyOne(this)" ><span class="button-label">4</span></label>
                                <label><input type="checkbox" name="r" value="5" onclick="onlyOne(this)" ><span class="button-label">5</span></label>
                            </td>
                        </tr>
                        <tr>
                            <td id="line">     
                                <input class="button" type="submit" value="Submit">
                                <input class="button" type="button" value="Reset">
                            </td>
                        </tr>
                    </table>
                </form>
            </td>  
        </tr>
        <!--/body-->
        <!--results-->
        <tr>
            <td colspan="2">
                <div class="scroll-container">
                    <table id="result-table">
                        <tr class="table-header">
                            <th class="coords-col">X</th>
                            <th class="coords-col">Y</th>
                            <th class="coords-col">R</th>
                            <th class="hit-col">Hit result</th>
                            <th class="time-col">Current time</th>
                            <th class="time-col">Execution time (millSec)</th>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
        <!--results-->
    </table>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="scripts/on_click.js"></script>
</body>    
</html>
