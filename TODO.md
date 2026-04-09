## AI Assistant Implementation TODO

### Backend (Secure Proxy)
- [ ] Install deps: `cd server && npm i openai axios express-rate-limit`
- [ ] Create `server/services/aiService.js`
- [ ] Create `server/controllers/aiController.js` 
- [ ] Create `server/routes/aiRoutes.js`
- [ ] Update `server/server.js` (mount /api/ai)
- [ ] Create `server/ai-knowledge/` (placeholder)
- [ ] Create `.env.example`

### Frontend Components
- [ ] Create `client/src/components/ai/AIWidget.jsx`
- [ ] Create `client/src/components/ai/ChatWindow.jsx`
- [ ] Create `client/src/components/ai/MessageBubble.jsx`
- [ ] Create `client/src/components/ai/TypingIndicator.jsx`

### Integration
- [ ] Update `client/src/services/api.js` (add chatAI)
- [ ] Update `client/src/components/common/MainLayout.jsx` (add AIWidget)

### Test
- [ ] Backend: Test `/api/ai/chat` POST
- [ ] Frontend: Test widget/chat flow
- [ ] Restart servers, verify mobile responsive

**Next: Backend deps & files**

