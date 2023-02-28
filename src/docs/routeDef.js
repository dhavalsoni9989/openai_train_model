/**
 * @swagger
 * tags:
 *   name: Files
 *   description: File Management and retrieval
 */

/**
 * @swagger
 * /list-files:
 *   get:
 *     summary: List Files
 *     description: This endpoint list all uploaded files
 *     tags: [Files]
 *     responses:
 *       "200":
 *         description: List Files
 *         content:
 *           application/json:
 *             schema:
 *                type: 'object'
 *                properties:
 *                  message:
 *                     type: 'string'
 *                  response:
 *                     type: 'object'
 *                     properties:
 *                        object:
 *                           type: 'string'
 *                           example: 'list'
 *                        data:
 *                           type: 'array'
 *                           items:
 *                              type: 'object'
 *                              properties:
 *                                 id:
 *                                    type: 'string'
 *                                    example: 'file-xxxxx'
 *                                 object:
 *                                    type: 'string'
 *                                    example: 'file'
 *                                 bytes:
 *                                    type: 'number'
 *                                 created_at:
 *                                    type: 'number'
 *                                 filename:
 *                                    type: 'string'
 *                                    example: 'mydata.jsonl'
 *                                 purpose:
 *                                    type: 'string'
 *                                    example: 'search or fine-tune'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */

/**
 * @swagger
 * tags:
 *   name: Fine-tunes
 *   description: Manage fine-tuning jobs to tailor a model to your specific training data.
 */
/**
 * @swagger
 *
 * /train-model:
 *  post:
 *    summary: Create fine-tune
 *    description: Creates a job that fine-tunes a specified model from a given dataset.
 *    tags: [Fine-tunes]
 *    responses:
 *      "200":
 *        description: Train OpenAI Model
 *        content:
 *          application/json:
 *            schema:
 *               type: 'object'
 *               properties:
 *                  message:
 *                     type: 'string'
 *                  response:
 *                     type: 'object'
 *                     properties:
 *                        object:
 *                           type: 'string'
 *                           example: 'list'
 *                        data:
 *                           type: 'array'
 *                           items:
 *                              type: 'object'
 *                              properties:
 *                                 id:
 *                                    type: 'string'
 *                                    example: 'file-xxxxx'
 *                                 object:
 *                                    type: 'string'
 *                                    example: 'file'
 *                                 bytes:
 *                                    type: 'number'
 *                                 created_at:
 *                                    type: 'number'
 *                                 filename:
 *                                    type: 'string'
 *                                    example: 'mydata.jsonl'
 *                                 purpose:
 *                                    type: 'string'
 *                                    example: 'search or fine-tune'
 *      "401":
 *        $ref: '#/components/responses/Unauthorized'
 *      "403":
 *        $ref: '#/components/responses/Forbidden'
 *      "404":
 *        $ref: '#/components/responses/NotFound'
 *
 * /list-fine-tunes:
 *  get:
 *    summary: List Fine Tunes
 *    description: List your organization's fine-tuning jobs
 *    tags: [Fine-tunes]
 *    responses:
 *      "200":
 *        description: List Trained models
 *        content:
 *          application/json:
 *            schema:
 *               type: 'object'
 *               properties:
 *                  message:
 *                     type: 'string'
 *                  response:
 *                     type: 'object'
 *                     properties:
 *                        object:
 *                           type: 'string'
 *                           example: 'list'
 *                        data:
 *                           type: 'array'
 *                           items:
 *                              type: 'object'
 *                              properties:
 *                                 id:
 *                                    type: 'string'
 *                                    example: 'file-xxxxx'
 *                                 object:
 *                                    type: 'string'
 *                                    example: 'file'
 *                                 bytes:
 *                                    type: 'number'
 *                                 created_at:
 *                                    type: 'number'
 *                                 filename:
 *                                    type: 'string'
 *                                    example: 'mydata.jsonl'
 *                                 purpose:
 *                                    type: 'string'
 *                                    example: 'search or fine-tune'
 *      "401":
 *        $ref: '#/components/responses/Unauthorized'
 *      "403":
 *        $ref: '#/components/responses/Forbidden'
 *      "404":
 *        $ref: '#/components/responses/NotFound'
 *
 * /fine-tune/{id}:
 *   get:
 *     summary: Retrieve fine-tune
 *     description: Gets info about the fine-tune job.
 *     tags: [Fine-tunes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       "200":
 *         description: Retrieve specific train model
 *         content:
 *           application/json:
 *             schema:
 *                type: 'object'
 *                properties:
 *                   message:
 *                      type: 'string'
 *                   response:
 *                      type: 'object'
 *                      properties:
 *                         object:
 *                            type: 'string'
 *                            example: 'list'
 *                         data:
 *                            type: 'array'
 *                            items:
 *                               type: 'object'
 *                               properties:
 *                                  id:
 *                                     type: 'string'
 *                                     example: 'file-xxxxx'
 *                                  object:
 *                                     type: 'string'
 *                                     example: 'file'
 *                                  bytes:
 *                                     type: 'number'
 *                                  created_at:
 *                                     type: 'number'
 *                                  filename:
 *                                     type: 'string'
 *                                     example: 'mydata.jsonl'
 *                                  purpose:
 *                                     type: 'string'
 *                                     example: 'search or fine-tune'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * tags:
 *   name: Completions
 *   description: Given a prompt, the model will return one or more predicted completions.
 */

/**
 * @swagger
 * /completion:
 *   post:
 *     summary: Completions
 *     description: Creates a completion for the provided prompt and parameters
 *     tags: [Completions]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: 'object'
 *             properties:
 *               query:
 *                 type: 'string'
 *                 example: 'Summary about global warming'
 *     responses:
 *       "200":
 *         description: OpenAI completion
 *         content:
 *           application/json:
 *             schema:
 *                type: 'object'
 *                properties:
 *                  message:
 *                     type: 'string'
 *                  response:
 *                     type: 'string'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
