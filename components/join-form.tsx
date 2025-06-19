import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function JoinForm() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10 text-primary">
        Ready to Join Mentor Academy?
      </h2>

      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name*</Label>
            <Input id="firstName" required />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name*</Label>
            <Input id="lastName" required />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number*</Label>
          <Input id="phone" type="tel" required />
        </div>

        <div>
          <Label className="mb-2 block">Which best describes you?*</Label>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new" id="new" />
              <Label htmlFor="new">I&apos;m new to coaching</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="side" id="side" />
              <Label htmlFor="side">I&apos;m coaching on the side but want to do it full-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="struggling" id="struggling" />
              <Label htmlFor="struggling">I&apos;m running a coaching business but am struggling to grow it</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="content" id="content" />
              <Label htmlFor="content">I&apos;m running a coaching business and looking for content</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="certification">Which certification are you interested in?*</Label>
          <Label className="text-sm text-primary font-semibold mb-2">(Don&apos;t worry; you can change this later)</Label>
          <Select>
            <SelectTrigger>
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cert1">Business Coach Cert</SelectItem>
              <SelectItem value="cert2">Life Coach Cert</SelectItem>
              <SelectItem value="cert3">Wellness Coach Cert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="challenge">What is your biggest challenge as a coach or an aspiring coach?*</Label>
          <Textarea id="challenge" />
        </div>

        <div>
          <Label>What are you currently earning as a coach?*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">$0</SelectItem>
              <SelectItem value="1-5">$1K-$5K/month</SelectItem>
              <SelectItem value="5-10">$5K-$10K/month</SelectItem>
              <SelectItem value="10+">$10K+/month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Are you currently using a CRM?*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Do you have any certifications?*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="referred">Referred By</Label>
          <Input id="referred" />
        </div>
      </form>
    </section>
  );
}
