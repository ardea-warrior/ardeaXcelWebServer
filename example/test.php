<?php 
for($i=1;$i<10;$i++) {
        // create curl resource 
        $ch = curl_init(); 

        // set url 
        curl_setopt($ch, CURLOPT_URL, "http://localhost:8087/xlsfunc/1+".$i); 

        //return the transfer as a string 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

        // $output contains the output string 
        $output = curl_exec($ch); 
		echo $output;
        // close curl resource to free up system resources 
        curl_close($ch); 
	}