const Register = () => {
  return (
    <div className="Register box_container">
      <form action="/register" method="post">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
      </form>
    </div>
  );
};

export default Register;
