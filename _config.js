var config = {}

// Update to have your correct username and password
config.mongoURI = {
    //production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
   // development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
   // test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
    
    //UPdated username and password
    // Connection string from the created cluster mongodb+srv://<db_username>:<db_password>@cluster0.h3dys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    production: 'mongodb+srv://gallery_ip_user:Moringa2024@cluster0.h3dys.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://gallery_ip_user:Moringa2024>@cluster0.h3dys.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://gallery_ip_user:Moringa2024@cluster0.h3dys.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
