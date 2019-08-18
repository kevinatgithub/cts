<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <link rel="shortcut icon" href="{{ asset('img/ritm_logo2.png') }}">
    <title>RITM-NRL (CTS - Confirmatory Test System)</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap core CSS -->
    <!-- <link href="{{asset('css/app.css')}}" rel="stylesheet"> -->
    <link href="{{asset('css/custom.css')}}" rel="stylesheet">
    <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
</head>
<body>
    <div id="app"></div>
    
    <!-- <script type="text/javascript" src="{{ asset('js/app.js') }}"></script> -->
    <script src="{{ (env('APP_ENV') === 'development') ? mix('js/app.js') : asset('js/app.js') }}"></script>
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></!--> -->
    <link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.css">
    <!-- <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.css"> -->
    
</html>