let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()

chai.use(chaiHttp)

describe('Testing Blog', () => {
  it('It should GET all blogs title', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/articles')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('array')
        done()
      })
  })

  it('It should POST an article', (done) => {
    chai.request('http://localhost:3000/api')
      .post('/article')
      .send({
        title: 'Hello World',
        content: 'Hello World',
        category: 'Hello World',
        slug: 'hello-world'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('It should GET/:slug an article by the given slug', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/article/hello-world')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('title')
        response.body.should.have.property('content')
        response.body.should.have.property('category')
        response.body.should.have.property('slug')
        done()
      })
  })

  it('It should PUT/:slug an article by the given slug', (done) => {
    chai.request('http://localhost:3000/api')
      .put('/article/hello-world')
      .send({
        title: 'Hello World 1',
        content: 'Hello World 1',
        category: 'Hello World 1',
        slug: 'hello-world'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('It should DELETE/:slug an article by the given slug', (done) => {
    chai.request('http://localhost:3000/api')
      .delete('/article/hello-world')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })
})
