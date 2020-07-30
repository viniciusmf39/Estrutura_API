import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json({ users });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const (uid) = req.params;

      const user = await User.findOne({ where: { uid } });

      return res.json({ user });
    } catch (error) {

      return res.json(response);
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({ user });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;

      const [user] = await User.update(req.body, { where: { uid } });

      f(!user) {
        throw Error('Usuário não encontrado');
      }

      return res.json({ user });
    } catch (error) {

      return res.json(response);
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await User.destroy({ where: { uid } });

      if(!deleted) {
        throw Error('Usuário não encontrado') ;
      }

      return res.json({ user });
    } catch (error) {
      const response = {
        message: 'Não foi possível excluir usuario',
        error,
      };
      return res.json(response);
    }
  }
}

export default new UserController();
