const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  }).then((category) => {
    res.json(category);
  });
});

router.get("/:id", (req, res) => {
  Category.findOne({
    include: [Product],
  }).then((category) => {
    res.json(category);
  });
});

router.post("/", (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update({
    // all fields here
  }
{
  where: {
    category_id: req.params.category_id,
  },
}
);
.then((updatedCategory) => {
  res.json(updatedCategory);
})
.catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
