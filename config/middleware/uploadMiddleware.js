import multer from 'multer';


const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, '/public/file');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname);
    }
  });

export default upload