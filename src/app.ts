import express, { Response } from 'express';
import { authenticateToken, authorizeRoles } from './middleware/rbac';
import { AuthRequest, Role } from './types';
import { AuthService } from './services/auth';

const app = express();
app.use(express.json());

// Public login route (No lock on this door)
app.post('/login', async (req, res) => {
  // Pretending a Fleet Manager successfully logged in
  const mockToken = AuthService.generateToken('user-123', Role.FLEET_MANAGER);
  res.json({ token: mockToken });
});

// Lock all the doors below this line - users must have a token
app.use(authenticateToken); 

// Only Fleet Managers
app.post('/api/vehicles/assign', authorizeRoles(Role.FLEET_MANAGER), (req: AuthRequest, res: Response) => {
    res.json({ message: 'Vehicle successfully assigned.' });
});

// Only Drivers
app.put('/api/trips/log', authorizeRoles(Role.DRIVER), (req: AuthRequest, res: Response) => {
    res.json({ message: 'Trip log updated.' });
});

// Only Safety Officers
app.post('/api/safety/inspections/approve', authorizeRoles(Role.SAFETY_OFFICER), (req: AuthRequest, res: Response) => {
    res.json({ message: 'Safety inspection approved.' });
});

// Only Financial Analysts
app.get('/api/finance/projections', authorizeRoles(Role.FINANCIAL_ANALYST), (req: AuthRequest, res: Response) => {
    res.json({ message: 'Financial projections data...' });
});

// Fleet Managers OR Financial Analysts
app.get('/api/dashboard/summary', authorizeRoles(Role.FLEET_MANAGER, Role.FINANCIAL_ANALYST), (req: AuthRequest, res: Response) => {
    res.json({ message: 'High-level summary data...' });
});

app.listen(3000, () => console.log('Server running on port 3000'));