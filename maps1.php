<?php
            $origin = $_POST['o'];
            $destination = $_POST['d'];
            $api = file_get_contents("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=".$origin."&destinations=".$destination."&key=Your API key");
            $data = json_decode($api);
       
             $returnvalue["duration"]= $data->rows[0]->elements[0]->duration->text;
            $returnvalue["distance"]= (int)$data->rows[0]->elements[0]->distance->value / 1000;
             echo json_encode($returnvalue);
?>
