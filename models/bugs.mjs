export default function bugsModel(sequelize, DataTypes) {
  return sequelize.define('bugs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    problem: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    error_text: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    feature_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    commit: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, { underscored: true });
}
