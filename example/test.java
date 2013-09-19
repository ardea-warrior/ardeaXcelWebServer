import java.net.*;
import java.io.*;

URL url = new URL("http://127.0.0.1:8087/xlsfunc/1+1");
BufferedReader reader = null;

try {
    reader = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));

    for (String line; (line = reader.readLine()) != null;) {
        System.out.println(line);
    }
} finally {
    if (reader != null) try { reader.close(); } catch (IOException ignore) {}
}